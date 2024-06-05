/**
 * @swagger
 * components:
 *  schemas:
 *      ReturnObject:
 *          type: object
 *          properties:
 *              documentTitle:
 *                  type: string
 *              pageUrl:
 *                  type: string
 *              issues:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          code:
 *                              type: string 
 *                          context:
 *                              type: string  
 *                          message:
 *                              type: string
 *                          selector:
 *                              type: string
 *                          type:
 *                              type: string
 *      PdfFile:
 *          type: string
 *          format: binary
 *      ReturnObjects:
 *          type: array
 *          items:
 *              type: object
 *              $ref: '#/components/schemas/ReturnObject'
 *      ErrorReturn:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *      SingleURL:
 *          type: object
 *          properties:
 *              url:
 *                  type: string
 *      MultipleURL:
 *          type: array
 *          items:
 *              type: string
 */
import { formatIssues } from '../util/helperFunctions';
import express, { Request, Response } from 'express';
import { makeReport } from '../util/reportFunctions';
import pa11y from 'pa11y';
import path from 'path';
import fs from 'fs';

// Pa11y options
const options = {
    log: {
        debug: console.log,
        error: console.error,
        info: console.log,
    },
};

// Initialize the router
const router = express.Router();

/**
 * @swagger
 * /single:
 *  post:
 *      summary: Get accessibility issues for a single URL
 *      tags: [Run tests]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/SingleURL'
 *      responses:
 *          200:
 *              description: The accessibility issues for the URL
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ReturnObjects'
 *          500:
 *              description: Internal server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ErrorReturn'
 */
router.post("/single", async (req: Request, res: Response) => {
    try {
        // Input data from the front-end
        const { url } = req.body;

        // Run web crawler on the URL
        const results = await pa11y(url, options);

        // Extract the document title, issues, and page URL
        const { documentTitle, issues, pageUrl } = results;

        // if no principle found return standard message
        const returnIssues = formatIssues(issues);

        // Return the accessibility issues
        const returnValue = [
            {
                documentTitle,
                pageUrl,
                issues: returnIssues,
            },
        ];

        // Send the response
        res.json({ results: returnValue });
    } 
    catch (error: any) {
        // Send the error message
        res.status(500).json({ message: error.message });
    };
});

/**
 * @swagger
 * /multiple:
 *  post:
 *      summary: Get accessibility issues for multiple URL's
 *      tags: [Run tests]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/MultipleURL'
 *      responses:
 *          200:
 *              description: The accessibility issues for the URL
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ReturnObjects'
 *          500:
 *              description: Internal server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ErrorReturn'
 */
router.post("/multiple", async (req: Request, res: Response) => {
    try {
        // Input data from the front-end
        const { urls } = req.body;

        // Run web crawler on the multiple URLs
        const results = await Promise.all(
            urls.map(async (url: string) => await pa11y(url, options))
        );

        // Extract the document title, issues, and page URL
        const returnValue = results.map((result: any) => {
            const { documentTitle, issues, pageUrl } = result;

            const returnIssues = formatIssues(issues);

            return {
                documentTitle,
                pageUrl,
                issues: returnIssues,
            };
        });

        // Send the response
        res.json({ results: returnValue });
    } 
    catch (error: any) {
        // Send the error message
        res.status(500).json({ message: error.message });
    };
});

/**
 * @swagger
 * /pdf:
 *  post:
 *      summary: Get pdf report for the accessibility issues
 *      tags: [Report]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/ReturnObjects'
 *      responses:
 *          200:
 *              description: The accessibility issues for the URL
 *              content:
 *                  application/pdf:
 *                      schema:
 *                          $ref: '#/components/schemas/PdfFile'
 *          500:
 *              description: Internal server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ErrorReturn'
 */
router.post("/pdf", async (req: Request, res: Response) => {
    // Input data from the front-end
    const { reportData } = req.body;

    // Create a new PDF document
    const doc = makeReport(reportData);

    // Generate PDF path and save
    const pdfPath = path.join(__dirname, 'generated.pdf');
    doc.save(pdfPath);

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=generated.pdf');

    // Send the PDF file
    res.download(pdfPath, 'generated.pdf', (err) => {
        if (err) {
            // Log the error
            console.error(err);

            // Delete the PDF file
            fs.unlinkSync(pdfPath);

            // Send the error message
            res.status(500).json({ message: err.message });
        } 
        else {
            // Delete the PDF file
            fs.unlinkSync(pdfPath);
        }
    });
})

export default router;
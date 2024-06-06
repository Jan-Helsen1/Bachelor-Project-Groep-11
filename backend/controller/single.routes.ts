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
import { runMultipleUrlTest, runSingleUrlTest } from '../util/helperFunctions';
import express, { Request, Response } from 'express';
import { makeReport } from '../util/reportFunctions';
import path from 'path';
import fs from 'fs';

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

        // Run all tests on the URL
        const returnValue = await runSingleUrlTest(url);

        // Send the response
        res.json({ results: [returnValue] });
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
        const results = await runMultipleUrlTest(urls);

        // Send the response
        res.json({ results });
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
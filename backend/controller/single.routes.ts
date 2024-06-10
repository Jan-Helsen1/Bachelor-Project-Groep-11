/**
 * @swagger
 * components:
 *  schemas:
 *      ReturnObject:
 *          type: object
 *          properties:
 *              hostname:
 *                  type: string
 *                  example: digitall.be
 *              urls:
 *                  type: array
 *                  items:
 *                      type: string
 *                      example: digitall.be/situation-belgium
 *              questionResult:
 *                  type: object
 *                  properties:
 *                      wcagResult:
 *                          type: object
 *                          properties:
 *                              question:
 *                                  type: string
 *                                  example: With which WCAG standard and level are you compliant? 
 *                              answer:
 *                                  type: string
 *                                  example: WCAG 2.1 Level A
 *                              explanation:
 *                                  type: string
 *                                  example: You are already well on your way of complying with a WCAG standard but there is still some room for improvement. Accessibility experts such as ElevenWays and the official websites of WCAG can help you find out how to further increase the accessibility of your website or app.
 *                              score:
 *                                  type: number
 *                              hostIssues:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      $ref: '#/components/schemas/issuesPerUrl'
 *                      httpsResult:
 *                          type: object
 *                          properties:
 *                              question:
 *                                  type: string
 *                                  example: Does your organisation provide a secured website (https) for older operating systems?
 *                              answer:
 *                                  type: string
 *                                  example: Yes
 *                              explanation:
 *                                  type: string
 *                                  example: Very good. You are already applying HTTPS. Always make sure you roll out the latest security patches. The cybersecurity world is constantly changing so make sure you have all the latest updates installed.
 *                              score:
 *                                  type: number
 *      issue:
 *          type: object
 *          properties:
 *              context:
 *                  type: string
 *                  example: <center><br clear="all" id="lgpd"><div ...</center> 
 *              message:
 *                  type: string
 *                  example: Presentational markup used that has become obsolete in HTML5.
 *              explanation:
 *                  type: string 
 *                  example: The html element should have a lang or xml:lang attribute which describes the language of the document.                 
 *              appliesTo:
 *                  type: string 
 *                  example: HTML element with no language attributes.
 *              type:
 *                  type: string
 *                  example: Error
 *              wcag:
 *                  type: string 
 *                  example: WCAGAA 
 *              code:
 *                  type: string
 *                  example: Principle1.Guideline1_3.1_3_1.H49
 *      issuesPerUrl:
 *          type: object
 *          properties:
 *              documentTitle:
 *                  type: string
 *                  example: digitAll
 *              issues:
 *                  type: array
 *                  items:
 *                      type: object
 *                      $ref: '#/components/schemas/issue'
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
 *                  example: https://www.example.be
 *      MultipleURL:
 *          type: array
 *          items:
 *              type: string
 *              example: https://www.example1.be
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
router.post("/test", async (req: Request, res: Response) => {
    try {
        // Input data from the front-end
        const { urls } = req.body;

        // Get the wcag and https results
        const returnValue = await runTests(urls);

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
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
import express, { Request, Response } from 'express';
import pa11y from 'pa11y';

const options = {
    log: {
        debug: console.log,
        error: console.error,
        info: console.log,
    },
};

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
 *                          $ref: '#/components/schemas/ReturnObject'
 *          500:
 *              description: Internal server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ErrorReturn'
 */
router.post("/single", async (req: Request, res: Response) => {
    try {
        const { url } = req.body;

        const results = await pa11y(url, options);

        const { documentTitle, issues, pageUrl } = results;

        const returnValue = [
            {
                documentTitle,
                pageUrl,
                issues: issues.map((issue: any) => ({
                    code: issue.code,
                    context: issue.context,
                    message: issue.message,
                    selector: issue.selector,
                    type: issue.type,
                })),
            },
        ]

        res.json({ results: returnValue });
    } catch (error: any) {
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
        const { urls } = req.body;

        const results = await Promise.all(
            urls.map(async (url: string) => await pa11y(url, options))
        );

        const returnValue = results.map((result: any) => {
            const { documentTitle, issues, pageUrl } = result;

            return {
                documentTitle,
                pageUrl,
                issues: issues.map((issue: any) => ({
                    code: issue.code,
                    context: issue.context,
                    message: issue.message,
                    selector: issue.selector,
                    type: issue.type,
                })),
            };
        });

        res.json({ results: returnValue });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
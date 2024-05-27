import express, { Request, Response } from 'express';
import pa11y from 'pa11y';

const options = {
    log: {
        debug: console.log,
        error: console.error,
        info: console.log,
    },
};

const multipleRouter = express.Router();

multipleRouter.post("/", async (req: Request, res: Response) => {
    try {
        const { urls } = req.body;

        const results = await Promise.all(
            urls.map(async (url: string) => await pa11y(url, options))
        );

        res.json({ results: results });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default multipleRouter;
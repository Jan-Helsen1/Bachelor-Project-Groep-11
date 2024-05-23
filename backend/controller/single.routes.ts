import express, { Request, Response } from 'express';
import pa11y from 'pa11y';

const options = {
    log: {
        debug: console.log,
        error: console.error,
        info: console.log,
    },
};

const singleRouter = express.Router();

singleRouter.post("/", async (req: Request, res: Response) => {
    try {
        const { url } = req.body;

        const results = await pa11y(url, options)

        res.json({ results: results });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    };
});

export default singleRouter;
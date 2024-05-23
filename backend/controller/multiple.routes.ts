import express, { Request, Response } from 'express';

const multipleRouter = express.Router();

multipleRouter.post("/", async (req: Request, res: Response) => {
    try {
        const { urls } = req.body;

        console.log(urls);

        res.json({ message: "URLs received." });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default multipleRouter;
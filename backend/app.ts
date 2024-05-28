import bodyParser from 'body-parser';
import express from 'express';
import singleRouter from './controller/single.routes';
import multipleRouter from './controller/multiple.routes';
import cors from 'cors';

const app = express();
const port = 3000

app.use(cors({ origin: "http://localhost:5173" }))
app.use(bodyParser.json());

// Router for single url search
app.use("/single", singleRouter);

// Router for multiple url search
app.use("/multiple", multipleRouter);

app.listen(port, () => {
    console.log(`Back-end is running on port ${port}.`);
});
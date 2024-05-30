import bodyParser from 'body-parser';
import express from 'express';
import singleRouter from './controller/single.routes';
import multipleRouter from './controller/multiple.routes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

const app = express();
const port = 3000

app.use(cors({ origin: "http://localhost:5173" }))
app.use(bodyParser.json());

const swaggerOpts = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Back-end",
        version: "1.0.0",
      },
    },
    apis: ["./controller/*.routes.ts"],
};
const swaggerSpec = swaggerJsdoc(swaggerOpts);

// Router for single url search
app.use("/single", singleRouter);

// Router for multiple url search
app.use("/multiple", multipleRouter);

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Back-end is running on port ${port}.`);
});
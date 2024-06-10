import bodyParser from 'body-parser';
import express from 'express';
import router from './controller/single.routes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

// Create an express app
const app = express();

// Set the port, can be from .env file
const port = 3000

// Allow cross-origin requests
app.use(cors({ origin: "http://localhost:5173" }))

// Parse JSON bodies
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

// Router for single and multiple url search
app.use("/api", router);

// Swagger documentation
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(port, () => {
    console.log(`Back-end is running on port ${port}.`);
});
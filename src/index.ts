import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cors from "cors";
import logger from "./utils/logger";
import router from "./routes/main.route";
// import { createClient } from "redis";

const app: Application = express();
const PORT = process.env.PORT || 5051;
// const client = createClient();
// client.on("error", (err) => console.log("Redis Client Error", err));

// client.connect();

app.use(express.json());
app.use(cors());
app.use("/main", router);

app.listen(PORT, () => {
  logger.info(`Service is running on port ${PORT}`);
});

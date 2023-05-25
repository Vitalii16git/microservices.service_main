import express, { Request, Response, Application, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

const app: Application = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  // Perform data validation and preprocessing

  // Send requests to other microservices
  await axios.post("http://localhost:3001/users/register", req.body);
  await axios.post("http://localhost:3003/payments", req.body);

  res.status(200).send("Registration successful");
});

app.listen(PORT, () => {
  console.log(`Service is running on port ${PORT}`);
});

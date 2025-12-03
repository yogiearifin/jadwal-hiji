import express, { Request, Response } from "express";
import dotenv from "dotenv";
import customerRoutes from "./routes/customerRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/customers", customerRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hey boss, just want to let you know that I'm out of product");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

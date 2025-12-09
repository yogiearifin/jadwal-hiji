import express, { Request, Response } from "express";
import dotenv from "dotenv";
import customerRoutes from "./routes/customerRoutes";
import rankRoutes from "./routes/rankRoutes";
import cors from "cors";
import regionRoutes from "./routes/regionRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/customers", customerRoutes);
app.use("/ranks", rankRoutes);
app.use("/regions", regionRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hey boss, just want to let you know that I'm out of product");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

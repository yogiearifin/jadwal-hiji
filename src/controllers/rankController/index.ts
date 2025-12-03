import { Request, Response } from "express";
import { supabase } from "../../config/supabaseClient";
import { errorHandler } from "../../middleware/errorMiddleware";

export const getAllRanks = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("rank").select("*");
  if (error) {
    errorHandler(error, res);
  }

  res.json(data);
};

import { Request, Response } from "express";
import { supabase } from "../../config/supabaseClient";
import { errorHandler } from "../../middleware/errorMiddleware";

export const getAllRegion = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("region")
    .select("*")
    .order("region_level");
  if (error) {
    errorHandler(error, res);
  }

  res.json(data);
};

export const getSingleRegion = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("region")
    .select("*")
    .eq("id", req.params.id)
    .single();

  if (error) {
    errorHandler(error, res);
  }

  res.json(data);
};

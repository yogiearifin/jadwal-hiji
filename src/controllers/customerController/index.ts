import { Request, Response } from "express";
import { supabase } from "../../config/supabaseClient";
import { errorHandler } from "../../middleware/errorMiddleware";

export const getAllCustomers = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("customer").select("*").order("name");
  if (error) {
    errorHandler(error, res);
  }

  res.json(data);
};

export const getSingleCustomer = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("customer")
    .select("*")
    .eq("id", req.params.id)
    .single();

  if (error) {
    errorHandler(error, res);
  }

  res.json(data);
};

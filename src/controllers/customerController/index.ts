import { Request, Response } from "express";
import { supabase } from "../../config/supabaseClient";
import { errorHandler } from "../../middleware/errorMiddleware";

export const getAllCustomers = async (req: Request, res: Response) => {
  const region =
    typeof req.query.region === "string" ? req.query.region : undefined;
  const name = typeof req.query.name === "string" ? req.query.name : undefined;
  const query = supabase.from("customer").select("*").order("name");
  if (name) {
    query.ilike("name", `%${name}%`);
  }
  if (region) {
    query.eq("region", region);
  }
  const { data, error } = await query;
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

import { PostgrestError } from "@supabase/supabase-js";
import { Response } from "express";

export const errorHandler = (error: PostgrestError | null, res: Response) => {
  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

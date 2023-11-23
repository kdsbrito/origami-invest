import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export const useSupabase = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  return supabase;
};

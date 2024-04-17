import { SupabaseClient, createClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | undefined;

if (
  typeof process.env.NEXT_PUBLIC_SUPABASE_URL !== "undefined" &&
  typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== "undefined"
) {
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  let anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  supabaseClient = createClient(url, anon);
} else {
  console.error(
    `Environment variable gg bro, heres the error ${supabaseClient}`
  );
  console.log("Supabase client status:  ", supabaseClient);
}

export { supabaseClient };

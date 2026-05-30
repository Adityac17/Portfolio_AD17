import { createClient } from "@supabase/supabase-js";

// Grab variables from your local execution environment (.env.local)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fail-safe validation checks for the build runner pipeline
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "⚠️ Supabase Telemetry Warning: Environment variables missing. " +
    "Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are locked in your .env.local file."
  );
}

/**
 * AD17 Singleton Database Connector Instance
 * Safe for use in both Client Components ('use client') and Server Actions.
 */
export const supabase = createClient(
  supabaseUrl || "https://placeholder-url.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);
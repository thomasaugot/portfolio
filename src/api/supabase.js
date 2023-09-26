import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wshpvyskclbbggfhpkxv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzaHB2eXNrY2xiYmdnZmhwa3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NDY4MTAsImV4cCI6MjAxMTIyMjgxMH0.jHn7NB_0TCA1gw3skW2lZ2fca0WRdZ4FkE2VSgOr_Iw";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

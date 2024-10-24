import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xrqxhbeswcifxmcsifxg.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhycXhoYmVzd2NpZnhtY3NpZnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0MjY5MTMsImV4cCI6MjA0NTAwMjkxM30.1eNQTNEAEjq3RcSTcg_glFOWkctRotk1PDJt96h_q4g`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

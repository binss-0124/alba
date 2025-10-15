import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jophtwojgoapptqezkpn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvcGh0d29qZ29hcHB0cWV6a3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyODk5NDUsImV4cCI6MjA3NDg2NTk0NX0.eq_mxslp795nIop1HWt7CpVCeGtfRT6q_7ez8C9MAgc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

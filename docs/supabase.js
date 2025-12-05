import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const URL = "https://qvhgapoyhlsxrjowwuqj.supabase.co";

// To jest Twój ANON KEY
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2aGdhcG95aGxzeHJqb3d3dXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMDYwODIsImV4cCI6MjA3OTY4MjA4Mn0.a6XMENnNGucZLzKMNz2fNm-t2LcsauWHNkUU-pk45vw";

export const supabase = createClient(URL, KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  }
});

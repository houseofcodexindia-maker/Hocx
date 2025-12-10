
import { createClient } from '@supabase/supabase-js';

// Safe client creation to prevent app crash if env vars are missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase URL or Anon Key. Please check your .env file or Vercel Environment Variables.");
}

// Create client only if keys are available, otherwise create a mock/dummy to prevent top-level crash
export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseKey || 'placeholder');

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ftilmtdgbvztgzfhpszi.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0aWxtdGRnYnZ6dGd6Zmhwc3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzNDIwNDMsImV4cCI6MjEwMzkxODA0M30.pfgrdRA66WKC-kSk4tW3WGPF-OKVqULd8G2pG0TD7bI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

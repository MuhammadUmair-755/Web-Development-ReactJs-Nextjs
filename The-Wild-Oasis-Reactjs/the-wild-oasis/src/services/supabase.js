import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://hbztfxeqbtcdhwcklauc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhienRmeGVxYnRjZGh3Y2tsYXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxODk4NDksImV4cCI6MjA4MDc2NTg0OX0.OuKSRglfY_G84rir3XfDSNTWvxhjZWdWW-fYXnUnLsY'
const supabase = createClient(supabaseUrl, supabaseKey)
 
export default supabase;
  import { createClient } from '@supabase/supabase-js'
  export const supabase = createClient(
    process.env.PROJECT_URL,
    process.env.SUPABASE_KEY
  )
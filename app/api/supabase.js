import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gubymwuuroyagpdpgdif.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Ynltd3V1cm95YWdwZHBnZGlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyNjE5MjUsImV4cCI6MjAwOTgzNzkyNX0.pKlgHkkI0l3mX2HCi988LyC5mos9k1QV1yLnU-8ssUk"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
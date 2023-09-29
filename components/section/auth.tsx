'use client'
import { SupabaseClient, createClient } from "@supabase/supabase-js"
import { Auth } from "@supabase/auth-ui-react"
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'


const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? ""
const supabase = createClient(url, key)
export const AuthSection = () => {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={['google']}
    />
  )
}

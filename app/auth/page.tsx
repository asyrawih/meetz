import { AuthSection } from "@/components/section/auth";
import { Database } from "@/lib/database";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { cache } from "react";


export default async function AuthPage() {
  const createServerSupabaseClient = cache(() => {
    const cookieStore = cookies()
    return createServerComponentClient({ cookies: () => cookieStore })
  })

  const supabase = createServerSupabaseClient()

  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="max-w-screen-md mx-auto py-24">
      <AuthSection />
    </div>
  )
}

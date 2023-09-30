import { AuthSection } from "@/components/section/auth";
import { Database } from "@/lib/database";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";


export default async function AuthPage() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

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

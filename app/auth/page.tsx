import { AuthSection } from "@/components/section/auth";
import { createClient } from "@supabase/supabase-js";


export default function AuthPage() {
  return (
    <div className="p-24">
      <AuthSection />
    </div>
  )
}

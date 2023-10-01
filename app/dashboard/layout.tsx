import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/custom/siderbar";
import { ThemeToggle } from "@/components/custom/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Database } from "@/lib/database";
import { BackpackIcon, TimerIcon, CameraIcon, EnvelopeOpenIcon, LightningBoltIcon, CalendarIcon, EnvelopeClosedIcon, GearIcon } from '@radix-ui/react-icons'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers"
import { SidebarSection } from "@/components/section/sidebar";

export default async function DashboardLayout({ children, }: { children: React.ReactNode }) {

  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    redirect('/auth')
  }

  const logout = async () => {
  }

  return (
    <section className="flex">
      <SidebarSection />
      {children}
    </section>
  )
}

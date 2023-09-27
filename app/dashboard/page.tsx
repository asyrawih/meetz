import { Sidebar, SidebarContent, SidebarHeader } from "@/components/custom/siderbar";
import { ThemeToggle } from "@/components/custom/toggle";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";


export default function Dashboard() {
  return (
    <>
      <Sidebar>
        <SidebarHeader className="flex border border-gray-100-black">
          <div className="flex justify-between">
            <div className="inline-flex items-center text-2xl">Meetz</div>
            <ThemeToggle />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
        </SidebarContent>
        <CardFooter>
          footer
        </CardFooter>
      </Sidebar>
    </>
  )
}

import { Sidebar, SidebarContent, SidebarHeader } from "@/components/custom/siderbar";
import { ThemeToggle } from "@/components/custom/toggle";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";


export default function Dashboard() {
  return (
    <>
      <Sidebar className="flex flex-col justify-between">
        <div className="sidebar-header-content">
          <SidebarHeader className="flex border border-gray-100-black">
            <div className="flex justify-between">
              <div className="inline-flex items-center text-2xl">Meetz</div>
              <ThemeToggle />
            </div>
          </SidebarHeader>
          <SidebarContent className="mt-4 mb-2">
            <div className="mb-4">content</div>
            <div className="mb-4">content</div>
            <div className="mb-4">content</div>
            <div className="mb-4">content</div>
          </SidebarContent>
        </div>
        <CardFooter>
          footer
        </CardFooter>
      </Sidebar>
    </>
  )
}

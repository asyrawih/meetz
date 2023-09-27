import { Sidebar, SidebarContent, SidebarHeader } from "@/components/custom/siderbar";
import { ThemeToggle } from "@/components/custom/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BackpackIcon, TimerIcon, EnvelopeOpenIcon, LightningBoltIcon, CalendarIcon } from '@radix-ui/react-icons'

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
  return (
    <section>
      <Sidebar className="flex flex-col justify-between">
        <div className="sidebar-header-content">
          <SidebarHeader className="flex border border-gray-100-black">
            <div className="flex justify-between">
              <div className="inline-flex items-center text-2xl">Meetz</div>
              <ThemeToggle />
            </div>
          </SidebarHeader>
          <SidebarContent className="mt-4 mb-2">
            <div className="mb-4 flex items-center">
              <LightningBoltIcon />
              <span className="font-semibold ml-3">Overview</span>
            </div>
            <div className="mb-4 flex items-center">
              <CalendarIcon />
              <span className="font-semibold ml-3">Calendar</span>
            </div>
            <div className="mb-4 flex items-center">
              <BackpackIcon />
              <span className="font-semibold ml-3">My Task</span>
            </div>
            <div className="mb-4 flex items-center">
              <TimerIcon />
              <span className="font-semibold ml-3">Schedule</span>
            </div>
            <div className="mb-4 flex items-center">
              <EnvelopeOpenIcon className="font-bold" />
              <span className="font-semibold ml-3">Notification</span>
            </div>
          </SidebarContent>
        </div>
        <CardFooter className="p-2">
          <div className="flex flex-col bg-gray-200 dark:bg-gray-800 w-full rounded py-4 ">
            <div className="flex items-center justify-evenly">
              <div className="bg-yellow-200 px-5 py-5 items-center rounded-md">
                <CalendarIcon className="text-gray-800" />
              </div>
              <div className="inline-flex flex-col justify-normal">
                <span className="text-sm">MSC (Mobile Legend) </span>
                <span className="text-sm">22:00 pm : 00:00 pm</span>
              </div>
            </div>
            <div className="flex items-center m-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center m-3">
              <Button className="w-full" >Remind Me</Button>
            </div>
          </div>
        </CardFooter>
      </Sidebar>
      {children}
    </section>
  )
}

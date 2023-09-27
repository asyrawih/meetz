import { Sidebar, SidebarContent, SidebarHeader } from "@/components/custom/siderbar";
import { ThemeToggle } from "@/components/custom/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BackpackIcon, TimerIcon, EnvelopeOpenIcon, LightningBoltIcon, CalendarIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import Link from "next/link";

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <Sidebar className="flex flex-col justify-between">
        <div className="sidebar-header-content">
          <SidebarHeader className="flex border border-gray-100-black">
            <div className="flex justify-between">
              <div className="inline-flex items-center text-2xl">Meetz</div>
              <ThemeToggle />
            </div>
          </SidebarHeader>
          <SidebarContent className="mt-4 mb-2">
            <Link href={"/dashboard/overview"}>
              <div className="mb-4 flex items-center cursor-pointer hover:text-blue-200">
                <LightningBoltIcon />
                <span className="font-semibold ml-3">Overview</span>
              </div>
            </Link>

            <Link href={"/dashboard/calendar"}>
              <div className="mb-4 flex items-center hover:text-blue-200">
                <CalendarIcon />
                <span className="font-semibold ml-3">Calendar</span>
              </div>
            </Link>

            <Link href={"/dashboard/task"}>
              <div className="mb-4 flex items-center hover:text-blue-200">
                <BackpackIcon />
                <span className="font-semibold ml-3">My Task</span>
              </div>
            </Link>

            <Link href={"/dashboard/schedule"}>
              <div className="mb-4 flex items-center hover:text-blue-200">
                <TimerIcon />
                <span className="font-semibold ml-3">Schedule</span>
              </div>
            </Link>

            <Link href={"/dashboard/notification"}>
              <div className="mb-4 flex items-center hover:text-blue-200">
                <EnvelopeOpenIcon className="font-bold" />
                <span className="font-semibold ml-3">Notification</span>
              </div>
            </Link>

            <Link href={"/dashboard/chat"}>
              <div className="mb-4 flex items-center hover:text-blue-200">
                <EnvelopeClosedIcon className="font-bold" />
                <span className="font-semibold ml-3">Chat</span>
              </div>
            </Link>
          </SidebarContent>
        </div>
        <CardFooter className="p-2 hidden">
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

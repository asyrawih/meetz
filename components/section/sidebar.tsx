'use client'

import Link from "next/link"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../custom/siderbar"
import { ThemeToggle } from "../custom/toggle"
import { BackpackIcon, CalendarIcon, CameraIcon, EnvelopeClosedIcon, EnvelopeOpenIcon, LightningBoltIcon, TimerIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"

export const SidebarSection = () => {
  return (
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

          <Link href={"/dashboard/meetings"}>
            <div className="mb-4 flex items-center hover:text-blue-200">
              <CameraIcon className="font-bold" />
              <span className="font-semibold ml-3">meetings</span>
            </div>
          </Link>
          <Link href={"/dashboard/chat"}>
            <div className="mb-4 flex items-center hover:text-blue-200">
              <EnvelopeClosedIcon className="font-bold" />
              <span className="font-semibold ml-3">Chat</span>
            </div>
          </Link>
        </SidebarContent>
        <SidebarFooter>
          <Button onClick={() => alert('te')} className="w-full">Logout</Button>
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}

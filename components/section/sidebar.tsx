"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../custom/siderbar";
import { ThemeToggle } from "../custom/toggle";
import {
  BackpackIcon,
  CalendarIcon,
  CameraIcon,
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
  LightningBoltIcon,
  TimerIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/lib/database";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarProps {
  logout: () => void;
}

export const SidebarSection = () => {
  const { auth } = createClientComponentClient();
  const [dataUser, setDataUser] = useState<User | null>(null);

  const router = useRouter();

  const signOut = async () => {
    await auth.signOut();
    router.refresh();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const supabase = createClientComponentClient();
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log("Data User : ", user);
        setDataUser(user);
      } catch (error) {
        console.error("Error Fetch Data User : ", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Sidebar className="flex flex-col justify-between">
      <div className="sidebar-header-content">
        <SidebarHeader className="flex border border-gray-100-black">
          <div className="flex justify-between">
            <div className="inline-flex items-center font-semibold text-4xl">
              Meetz
            </div>
            <ThemeToggle />
          </div>
          <h1 className="text-center pt-3">Hello, {dataUser?.email}</h1>
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
          <Button onClick={signOut} className="w-full">
            Logout
          </Button>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
};

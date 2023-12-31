"use client";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useMemo, useState } from "react";

const menuItem = ["Home", "About", "Projects"];

const LoginUserState = ({ user }: { user?: User }) => {
  return (
    <>
      <li className="mx-2 cursor-pointer">
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>
      <li className="mx-2 font-semibold">
        Hello, {user != null ? user.email : "loading..."}
      </li>
    </>
  );
};

export default function Navbar() {
  const [dataUser, setDataUser] = useState<User | null>(null);
  const user = useMemo(() => dataUser, [dataUser]);
  useEffect(() => {
    const fetchUserData = async () => {
      const supabase = createClientComponentClient();
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session) {
          setDataUser(session.user);
        }
      } catch (error) {
        console.error("error fetch data user : ", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-card dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            Meetz
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="inline-flex mx-3">
            <li className="mx-2 cursor-pointer">Projects</li>
            <li className="mx-2 cursor-pointer">About</li>
            {user !== null ? (
              <LoginUserState user={user} />
            ) : (
              <span>Loading..</span>
            )}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

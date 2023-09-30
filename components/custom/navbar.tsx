'use client'
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Button } from "../ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const menuItem = [
  "Home",
  "About",
  "Projects"
]

export default function Navbar() {

  return (
    <nav className="bg-white border-gray-200 dark:bg-card dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Meetz</span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="inline-flex mx-3">
            <li className="mx-2 cursor-pointer">Projects</li>
            <li className="mx-2 cursor-pointer">About</li>
            <li className="mx-2 cursor-pointer">
              <Link href={'/auth'}>Login</Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}


const ThemeToggle = () => {
  const { setTheme } = useTheme()
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
  )
}

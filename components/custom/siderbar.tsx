'use client'
import { HTMLAttributes, forwardRef } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Button } from "../ui/button"


export const Sidebar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, className }, ref) => {
  return (
    <aside className="hidden md:flex flex-col md:w-1/4 xl:w-1/6">
      <Card className={cn("rounded-t-none h-screen", className)}>
        {children}
      </Card>
    </aside>
  )
})
Sidebar.displayName = "Sidebar"

export const SidebarHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => {
  return (
    <CardHeader ref={ref} className={className} {...props}>
      {children}
    </CardHeader>
  )
})
SidebarHeader.displayName = "SidebarHeader"


export const SidebarContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => {
  return (
    <CardContent>
      <div className={className} ref={ref} {...props}>{children}</div>
    </CardContent>
  )
})

SidebarContent.displayName = "SidebarContent"


export const SidebarFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => {
  return (
    <CardFooter className={cn('p-3', className)} {...props}>
      {children}
    </CardFooter>
  )
})


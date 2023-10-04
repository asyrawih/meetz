'use client'
import { SupabaseClient, createClient } from "@supabase/supabase-js"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa, } from '@supabase/auth-ui-shared'
import { ThemeToggle } from "../custom/toggle"
import { useTheme } from "next-themes"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Suspense, useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import { Toaster } from "../ui/toaster"
import { ScrollArea } from "../ui/scroll-area"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"


const supabase = createClientComponentClient()

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).email(),
  password: z.string().min(2, {
    message: "Password must grether then 8 characters"
  })
})

export const AuthSection = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(theme ?? "light")
  }, [theme])

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <span>Login</span>
        <ThemeToggle />
      </CardHeader>
      <CardContent>
        <FormLogin />
      </CardContent>
      <CardDescription className="p-3">
        Please Login For Access Full Feature
      </CardDescription>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}


const FormLogin = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const user = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    const session = await supabase.auth.getSession()
    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-4 w-full p-6" type="submit">Login</Button>
      </form>
    </Form>
  )
}


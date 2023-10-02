'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { DialogFooter } from "../ui/dialog";
import { FormEventHandler } from "react";
import { Textarea } from "../ui/textarea";


export const CreateTaskForm = () => {

  const FormSchema = z.object({
    title: z.string().min(2),
    status: z.enum(['todo', 'progress', 'test', 'done']),
    description: z.string().min(10)
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      status: 'todo',
      description: ''
    }
  });


  const handleAddTask = (e: z.infer<typeof FormSchema>) => {
    console.log(e)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleAddTask)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold leading-4 tracking-wider">Title</FormLabel>
              <FormControl className="w-full">
                <Input placeholder="Title Task" className="col-span-3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold leading-4 tracking-wider">Status</FormLabel>
              <FormControl className="w-full">
                <Input placeholder="Status" className="col-span-3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold leading-4 tracking-wider">Status</FormLabel>
              <FormControl className="w-full">
                <Textarea placeholder="description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

        <DialogFooter className="mt-4">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};


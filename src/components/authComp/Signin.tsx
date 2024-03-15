"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {signIn} from 'next-auth/react';

const FormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(1, "Password is required"),
  });

const SignIn = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  function toggle() {
    setIsVisible(!isVisible);
  }
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log("i am here");
      const signinData = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if(signinData?.error){
        console.log(signinData.error);
      }else{
        router.push('/admin');
      }
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Log in</CardTitle>
              <CardDescription>
                Enter your details to log in to your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="mail@example.com" {...field} />
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
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="flex flex-row justify-between border rounded-lg">
                              <Input
                                className="border-0"
                                type={isVisible ? "view" : "password"}
                                placeholder="Enter your password"
                                {...field}
                              />
                              <button
                                className="inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={(e) => {
                                  toggle();
                                }}
                              >
                                {isVisible ? <Eye /> : <EyeOff />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                  </div>
                  <Button className="w-full mt-6" type="submit">
                    Log in
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

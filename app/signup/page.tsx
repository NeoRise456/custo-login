"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {useRouter} from "next/navigation";
import {useState} from "react";



const signupSchema = z.object({
    username: z.string()
        .min(2 , "Username must be at least 2 characters.")
        .max(20 , "Username must be at most 20 characters."),
    password: z.string()
        .min(5 , "Password must be at least 5 characters.")
        .max(20 , "Password must be at most 20 characters."),
})

export default function SignUpPage(){

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const signUpForm = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    async function signUp(values: z.infer<typeof signupSchema>) {
        setLoading(true);

        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            router.push('/thank-you');
        }
        else {
            setLoading(false);
        }
    }

    return (
        <div className={`flex h-full w-full items-center justify-center p-6 md:p-10  `}>
            <div className={`w-full max-w-xl `}>
                <div className={`flex flex-col gap-6 `}>
                    <div className={`border border-gray-200 flex flex-col gap-6 rounded-2xl p-6 bg-white relative`}>
                        <div className="pointer-events-none absolute -inset-10 rounded-3xl -z-10 bg-gradient-to-l from-transparent via-[#6bf4c7] to-transparent blur-xl opacity-70"/>
                        <div className={`flex flex-col gap-1.5`}>
                            <h1 className={`leading-none font-semibold`}> Signup </h1>
                            <p className={`text-sm text-gray-600`}>Enter username and password to continue</p>
                        </div>

                        <Form {...signUpForm}>
                            <form onSubmit={signUpForm.handleSubmit(signUp)} className="space-y-8">
                                <FormField
                                    control={signUpForm.control}
                                    name="username"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="your username :D" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={signUpForm.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="your password" type="password" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={loading}
                                        className="px-6 py-3 rounded-full text-white  bg-gradient-to-b from-gray-950 from-[40%] to-[#6d7a97] hover:from-[#6d7a97] hover:from-[5%] hover:to-gray-950 text-md font-medium transition-all duration-150 ease-in-out hover:scale-105">
                                    {loading ? "Submiting..." : "Submit"}
                                </Button>
                            </form>
                        </Form>
                    </div>

                </div>
            </div>
        </div>
    )
}
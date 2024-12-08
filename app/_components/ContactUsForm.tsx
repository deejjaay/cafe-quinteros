"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from '../(pages)/(home)/_components/ui/Form';
import { z } from 'zod';
import { Input } from '../(pages)/(home)/_components/ui/input';
import { Textarea } from "../(pages)/(home)/_components/ui/textarea";
import Link from "next/link";
import { Button } from "../(pages)/(home)/_components/ui/Button";

const schema = z.object({
    fullName: z.string().min(3, "Please provide a valid full name"),
    whatsapp: z.string().regex(/^\+?\d{10,15}$/, 'Please provide a valid WhatsApp number'),
    message: z.string(),
});

const ContactUsButton = () => {
    const form = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
        form.reset();
    };

    const users = [
        { input: 'fullName', placeholder: 'Full name*' },
        { input: 'whatsapp', placeholder: 'WhatsApp number*' },
    ];

    return (
        <FormProvider {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                {users.map(user => (
                    <FormField
                        key={user.input}
                        name={user.input}
                        render={({ field }) => {
                            const hasError = form.formState.errors[user.input];
                            return (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder={user.placeholder}
                                            {...field}
                                            className={`${ hasError ? 'border-primary rounded-[.8rem]' : 'border-gray rounded-[.8rem]' }`}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                ))}

                <FormField
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="How can we help you?" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <p className='mb-[32px] text-montserrat_regular_14 text-sub_text'>
                    <span className="opacity-20">By submitting this form, you agree to our </span>
                    <Link href={"/"}>Privacy Policy </Link>
                    <span className="opacity-20">and </span>
                    <Link href={"/"}>Site Terms</Link>
                </p>

                <Button 
                    className="w-full h-[5.2rem]" 
                    type="submit"
                > 
                    Submit 
                </Button>
            </form>
        </FormProvider>
    );
};

export default ContactUsButton;

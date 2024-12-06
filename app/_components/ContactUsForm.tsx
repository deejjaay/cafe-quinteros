"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from '../(pages)/(home)/_components/ui/Form';
import { Button } from '@radix-ui/themes';
import { z } from 'zod';
import { Input } from '../(pages)/(home)/_components/ui/input';
import { Textarea } from "../(pages)/(home)/_components/ui/textarea";
import Link from "next/link";

const schema = z.object({
    fullName: z.string().min(3, "Please provide a valid full name" ),
    whatsapp: z.string().regex(/^\+?\d{10,15}$/, 'Please provide a valid WhatsApp number'),
    message: z.string(),
});

const ContactUsButton = () => {

    const methods = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
        methods.reset();
    };

    const users = [
        { name: 'fullName', placeholder: 'Full name*' },
        { name: 'whatsapp', placeholder: 'WhatsApp number*' },
    ];

    return (
        <FormProvider {...methods}>
            <form className="space-y-8" onSubmit={methods.handleSubmit(onSubmit)}>
                {users.map(user => (
                    <FormField
                        key={user.name}
                        name={user.name}
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder={user.placeholder} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
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
                    type="submit"
                    className="w-full bg-primary text-white text-montserrat_bold_16 h-[52px] py-2 px-4 rounded-[8px] hover:bg-primary-dark focus:outline-none"
                >
                    Submit
                </Button>
            </form>
        </FormProvider>
    );
};

export default ContactUsButton;

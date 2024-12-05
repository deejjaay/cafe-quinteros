"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form"; 
import { FormControl, FormField, FormItem, FormMessage } from '../(pages)/(home)/_components/ui/Form';
import { Button } from '@radix-ui/themes';
import { z } from 'zod';
import { Input } from '../(pages)/(home)/_components/ui/input';
import { Textarea } from "../(pages)/(home)/_components/ui/textarea";

const schema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  whatsapp: z.string().min(10, "WhatsApp number must be at least 10 characters long"),
  message: z.string(),
});

const SampleForm = () => {

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    methods.reset();
  };

    return (
        <FormProvider {...methods}>
            <form className="space-y-8" onSubmit={methods.handleSubmit(onSubmit)}>

                <div className="mb-[32px] text-montserrat_regular_14 opacity-60">
                    <p className="mb-[16px]">
                        Have questions or need help? Feel free to reach out to us. We’re
                        here to assist you and will reply within 24 hours!
                    </p>
                    <p>
                        For faster communication, you can contact us on WhatsApp using
                        this <span className='text-primary text-montserrat_bold_14'>+503 6925 6177</span>.
                    </p>
                </div>

                <FormField
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Full name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="whatsapp"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="WhatsApp number*" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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

                <p className='mb-[32px] text-montserrat_regular_14 opacity-20'>
                    By submitting this form, you agree to our <span>Privacy Policy</span> and <span>Site Terms</span>
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

export default SampleForm;

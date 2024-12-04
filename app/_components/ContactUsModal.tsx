import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../(pages)/(home)/_components/ui/Dialog';
import ContactUsForm from './ContactUsForm';
import ContactUsButton from './ContactUsButton';

const ContactUsModal = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <ContactUsButton />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Contact Café Quinteros</DialogTitle>
                    <DialogDescription>
                        <ContactUsForm />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ContactUsModal;

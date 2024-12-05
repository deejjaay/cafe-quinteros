import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../(pages)/(home)/_components/ui/Dialog';
// import ContactUsForm from './ContactUsForm';
import ContactUsButton from './ContactUsButton';
import Sample from './Sample';
interface ContactUsModalProps {
    buttonSize?: 'why_choose' | 'hero' | 'nav';
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ buttonSize = 'hero' }) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <ContactUsButton size={buttonSize} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Contact Café Quinteros</DialogTitle>
                    <DialogDescription>
                        <Sample />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ContactUsModal;

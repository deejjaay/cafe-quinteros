import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../(pages)/(home)/_components/ui/Dialog';
import ContactUsForm from './ContactUsForm';
import ContactUsButton from './ContactUsButton';

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
                        <div className="mb-[32px] text-montserrat_regular_14 opacity-60">
                            <p className="mb-[16px]">
                                Have questions or need help? Feel free to reach out to us. We’re
                                here to assist you and will reply within 24 hours!
                            </p>
                            <p>
                                For faster communication, you can contact us on WhatsApp using
                                this <span className='text-primary text-montserrat_bold_14 !opacity-100'>+503 6925 6177</span>.
                            </p>
                        </div>
                        <ContactUsForm />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ContactUsModal;

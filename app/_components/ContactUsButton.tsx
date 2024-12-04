/* eslint-disable react/display-name */
import React from 'react';
import { Button } from '../(pages)/(home)/_components/ui/Button';

interface ContactUsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ContactUsButton = React.forwardRef<HTMLButtonElement, ContactUsButtonProps>((props, ref) => {
    return (
        <Button {...props} ref={ref} className="lg:w-[14rem] lg:h-[4.8rem] xl:w-[18rem]">
            Contact Us
        </Button>
    );
});

export default ContactUsButton;

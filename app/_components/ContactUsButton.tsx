/* eslint-disable react/display-name */
import React from 'react';
import { Button } from '../(pages)/(home)/_components/ui/Button';

interface ContactUsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'nav' | 'hero' | 'why_choose';
}

const ContactUsButton = React.forwardRef<HTMLButtonElement, ContactUsButtonProps>((props, ref) => {
    const { size = 'hero', ...rest } = props;

    const sizeClasses = {
        nav: 'lg:w-[14rem] xl:w-[18rem] h-[4.8rem]',
        hero: 'w-[18rem] h-[6.4rem]',
        why_choose: 'w-[24rem] h-[6.4rem]', 
    };

    return (
        <Button {...rest} ref={ref} className={sizeClasses[size]}>
            Contact Us
        </Button>
    );
});

export default ContactUsButton;

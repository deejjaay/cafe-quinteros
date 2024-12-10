import * as React from "react"

import { cn } from "@/app/_utils"

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <div className="relative w-full">
        <textarea
            className={cn(
                "peer flex h-[140px] resize-none px-5 py-5 w-full rounded-[8px] bg-gray text-montserrat_regular_16 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-2 focus:ring-primary",
                className
            )}
            ref={ref}
            {...props}
        />

        <style jsx>{`
            .peer::placeholder {
                transition: all 0.2s ease-in-out;
                position: absolute;
                left: 16px;
                top: 10%;
                transform: translateY(-10%);
                color: #9ca3af;
                font-size: 1.6rem;
                pointer-events: none;
            }

            .peer:focus::placeholder,
            .peer:not(:placeholder-shown)::placeholder {
                top: 0;
                font-size: 1rem;
                color: sub_text;
            }
        `}</style>
    </div>
    
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

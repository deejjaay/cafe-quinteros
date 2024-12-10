import * as React from "react"
import { cn } from "@/app/_utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
        <div className="relative w-full">
            <input
                type={type}
                autoComplete="off"
                className={cn(
                    "peer flex w-full h-[48px] px-4 py-2 mb-[8px] rounded-[8px] border border-sub_text bg-gray text-montserrat_regular_16 ring-offset-background file:border-0 file:bg-transparent file:text-montserrat_regular_16 file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-montserrat_regular_16 focus:ring-2 focus:ring-primary placeholder-transparent",
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
                top: 35%;
                transform: translateY(-10%);
                color: #9ca3af;
                font-size: 1.
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
  }
)

Input.displayName = "Input"

export { Input }

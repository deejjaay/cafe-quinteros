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
                    "peer flex w-full h-[48px] px-4 py-2 mb-[8px] rounded-[8px] border border-black-100 bg-gray text-montserrat_regular_16 ring-offset-background file:border-0 file:bg-transparent file:text-montserrat_regular_16 file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-montserrat_regular_16 focus:ring-2 focus:ring-primary placeholder-transparent",
                    className
                )}
                ref={ref}
                {...props}
            />
            <label
                htmlFor={props.id}
                className="absolute left-4 top-4 transform -translate-y-1/2 text-[1rem] text-gray-300 opacity-60 transition-all duration-200 peer-placeholder-shown:top-[45%] peer-placeholder-shown:text-montserrat_regular_16 peer-focus:top-4 peer-focus:text-[1rem] peer-focus:gray"
            >
                {props.placeholder}
            </label>
        </div>
        )
    }
)

Input.displayName = "Input"

export { Input }

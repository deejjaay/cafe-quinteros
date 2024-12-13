import * as React from "react";
import { cn } from "@/app/_utils";

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
    const [height, setHeight] = React.useState(140);

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
        setHeight(event.target.scrollHeight);
    };

    return (
        <div className="relative w-full">
            <textarea
                className={cn(
                    "peer flex resize-none px-5 py-5 w-full min-h-[14rem] rounded-[8px] border border-sub_text/20 bg-gray !text-sub_text text-montserrat_regular_16 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-1 focus:ring-primary placeholder-transparent overflow-hidden",
                    className
                )}
                ref={ref}
                style={{ height: `${height}px` }}
                onInput={handleInput}
                {...props}
            />
            <label
                htmlFor={props.id}
                className="absolute left-4 top-4 transform -translate-y-1/2 text-[1rem] text-gray-300 opacity-60 transition-all duration-200 peer-placeholder-shown:top-8 peer-placeholder-shown:text-montserrat_regular_16 peer-focus:top-4 peer-focus:text-[1rem] peer-focus:gray"
            >
                {props.placeholder}
            </label>
        </div>
    );
});

Textarea.displayName = "Textarea";

export { Textarea };

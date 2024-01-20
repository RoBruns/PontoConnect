import { HtmlHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
    primary: "bg-[#2BDA6B] text-white",
    secondary: "bg-[#2B7345] text-black",
    green_blue: "bg-[#2B7362] text-white",
    red: "bg-red-600 text-white",
};

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: keyof typeof variants;
};

export const Button = ({
    children,
    variant,
    className = "",
    ...rest
}: ButtonProps) => {
    const bg = variant ? variants[variant] : "";

    return (
        <button
            className={twMerge(
                `p-2 ${bg} rounded-lg font-sans h-[3.5rem]   ${className}`
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

import { HtmlHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    isPageSelected?: boolean;
};

export const Button = ({
    children,
    isPageSelected,
    className = "",
}: ButtonProps) => {
    const bg = isPageSelected
        ? "bg-[#2BDA6B] text-black"
        : "bg-[#2B7345] text-white";

    return (
        <button
            className={twMerge(`p-2 ${bg} rounded-lg h-[3.5rem] ${className}`)}
        >
            {children}
        </button>
    );
};

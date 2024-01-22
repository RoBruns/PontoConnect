import { HtmlHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
    primary: "bg-[#2BDA6B] text-white hover:bg-green-600 hover:scale-105",
    secondary: "bg-[#2B7345] text-black hover:bg-green-600 hover:scale-105",
    green_blue: "bg-[#2B7362] text-white",
    red: "bg-red-600 text-white hover:red-800 hover:scale-105",
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
                `p-2 ${bg} rounded-lg font-sans h-[3.5rem]  transition ease-in-out ${className}`
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

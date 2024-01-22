import { error } from "console";
import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    errors?: string;
    label: string;
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, errors, className, id, label, ...rest }, ref) => {
        const inputClass =
            " rounded-xl outline-none h-[40px] w-[400px] p-2 text-gray-900 focus:border-green-600 focus:border-2 transition ease-in-out";
        return (
            <>
                <label
                    htmlFor={id}
                    className="text-start flex flex-grow flex-col gap-2"
                >
                    {label}
                    <input
                        type={type}
                        className={twMerge(`${inputClass}${className}`)}
                        ref={ref}
                        id={id}
                        {...rest}
                    />
                    {errors && (
                        <span className="text-sm text-red-600">{errors}</span>
                    )}
                </label>
            </>
        );
    }
);

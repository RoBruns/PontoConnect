"use client";
import { z } from "zod";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";

const schema = z.object({
    login: z.string().min(4),
    password: z
        .string()
        .min(8, "Senha deve ter no minimo 8 caracteres")
        .max(64, "Maximo de caracteres sao 64"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
    const { onSubmit } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });

    const buttonClass =
        "text-lg rounded-xl p-1 flex w-[200px] justify-center pt-[6px] bg-green-primary text-gray-900 hover:bg-green-600 hover:scale-105 transition ease-in-out";
    return (
        <form
            className="flex-col items-center justify-center flex h-[540px] p-40 font-sans gap-[50px]"
            onSubmit={handleSubmit(
                async ({ login, password }) => await onSubmit(login, password)
            )}
        >
            <div className="flex items-start flex-col ">
                <Input
                    type="text"
                    id="username"
                    label="Login"
                    errors={errors.login?.message}
                    {...register("login")}
                />
            </div>
            <div className="flex items-start flex-col">
                <Input
                    type="password"
                    id="password"
                    label="Senha"
                    errors={errors.password?.message}
                    {...register("password")}
                />
            </div>
            <div className="mt-5">
                <button className={buttonClass} type="submit">
                    Conectar-se
                </button>
            </div>
        </form>
    );
}

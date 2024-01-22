"use client";

import logo from "../../../public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

type HeaderProps = {
    varFeatName: string;
};

export default function Header({ varFeatName }: HeaderProps) {
    const pathname = usePathname();

    const isNotLoginPage = pathname !== "/login";

    let featName = varFeatName;

    return (
        <header>
            <div className="p-6 flex items-center">
                <Image src={logo} alt="ZapBot" width={85} height={85} />
                <h1 className="font-logo text-gray-100 text-[40px]">ZapBot</h1>

                {isNotLoginPage && (
                    <div className="w-full flex items-center justify-between">
                        <div></div>
                        <h1 className="font-logo text-4xl text-white">
                            {featName}
                        </h1>
                        <p className="font-sans text-white">
                            Usuário | Id: 00001
                        </p>
                    </div>
                )}
            </div>
        </header>
    );
}

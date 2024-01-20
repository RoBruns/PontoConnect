'use client'

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const isNotLoginPage = pathname !== '/login';

    return (
        <header>
            <div className='p-6 flex items-center'>
                <Image
                    src="/icon.png"
                    alt="ZapBot"
                    width={85}
                    height={85}
                />
                <h1 className='font-logo text-gray-100 text-[40px]'>ZapBot</h1>

                {isNotLoginPage && (
                    <> <div className='w-full flex items-center justify-between'>
                        <div></div>
                        <h1 className="font-logo text-4xl text-white">Conectar WhatsApp</h1>
                        <p className="font-sans text-white">Usuário | Id: 00001</p>
                    </div>
                    </>
                )}
            </div>
        </header>
    );
}
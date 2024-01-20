import Image from "next/image";
import logo from "../../public/logo.svg";

export function Logo() {
    return (
        <div>
            <Image
                src={logo}
                alt="ZapBot"
                width={85}
                height={85}
            />
            <h1 className='font-logo text-gray-100 text-[40px]'>ZapBot</h1>
        </div>
    );
}

import Image from "next/image";
import logo from "../../public/logo.svg";
export function Logo() {
    return (
        <div className="flex gap-1 items-center">
            <Image src={logo} alt="logo" width={150} height={150} />
            <h1 className="text-4xl font-semibold text-white">ZapBot</h1>
        </div>
    );
}

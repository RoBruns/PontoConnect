import { Button, variants } from "./Button";
import { CiLogout } from "react-icons/ci";

type LeftMenuProps = {
    whatsappVariant?: keyof typeof variants;
    disparoVariant?: keyof typeof variants;
    esquentaVariant?: keyof typeof variants;
};

export default function LeftMenu({
    whatsappVariant = "primary", // valor padrão é 'primary'
    disparoVariant = "secondary",
    esquentaVariant = "secondary",
}: LeftMenuProps) {
    return (
        <section className="w-[20rem] flex-grow bg-[#1E1E1E] rounded-lg flex flex-col justify-between font-sans z-0">
            <div className="flex flex-col px-2 py-6 gap-6">
                <Button variant={whatsappVariant}>
                    <p>WhatsApp</p>
                </Button>
                <Button variant={disparoVariant}>
                    <p>Disparo</p>
                </Button>
                <Button variant={esquentaVariant}>
                    <p>Esquenta</p>
                </Button>
            </div>
            <div className="flex flex-col gap-6 ">
                <div className="p-2 flex mx-3">
                    <Button className="p-4 w-full text-white bg-[#2B7362] hover:bg-[#1d4e43]">
                        <p>Suporte</p>
                    </Button>
                </div>

                <Button className="bg-[#2F2F2F] flex items-center justify-center gap-2 hover:bg-red-500 hover:scale-100 transition-all">
                    <p className="text-white">Sair</p>
                    <CiLogout size={20} color="#FFFFFF" />
                </Button>
            </div>
        </section>
    );
}

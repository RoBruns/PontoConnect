import { Button } from "./Button";
import { CiLogout } from "react-icons/ci";

export default function LeftMenu() {
    return (
        <section className="w-[20rem] h-[50rem] bg-[#1E1E1E] rounded-lg flex flex-col justify-between font-sans">
            <div className="flex flex-col px-2 py-6 gap-6">
                <Button variant="primary">
                    <p>WhatsApp</p>
                </Button>
                <Button variant="secondary">
                    <p>Disparo</p>
                </Button>
                <Button variant="secondary">
                    <p>Esquenta</p>
                </Button>
            </div>
            <div className="flex flex-col gap-6 ">
                <div className="p-2 flex mx-3">
                    <Button className="p-4 w-full text-white bg-[#2B7362]">
                        <p>Suporte</p>
                    </Button>
                </div>

                <Button className="bg-[#2F2F2F] flex items-center justify-center gap-2 hover:bg-red-500 transition-all">
                    <p className="text-white">Sair</p>
                    <CiLogout size={20} color="#FFFFFF" />
                </Button>
            </div>
        </section>
    );
}

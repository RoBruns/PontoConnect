import { Logo } from "../Logo";

export function Header() {
    return (
        <header className="flex justify-between items-center">
            <Logo />
            <h1 className="text-4xl text-white font-sans ">
                Conectar WhatsApp
            </h1>
            <p className="text-white font-sans">Usuário | Id: 00001</p>
        </header>
    );
}

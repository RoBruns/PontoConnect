import { Logo } from "../Logo";

export function Header() {
    return (
        <header className="flex justify-between items-center">
            <Logo />
            <h1 className="text-4xl text-white">Conectar WhatsApp</h1>
            <p>Usuário | Id: 00001</p>
        </header>
    );
}

import { Button } from "../Button";

export default function QrCodeWithNumber({
    handleClick,
}: {
    handleClick: () => void;
}) {
    return (
        <div className="h-full flex gap-6 w-full ">
            <div className="w-[60%] h-full flex flex-col justify-center items-center gap-14 bg-[#0C1710] rounded-lg">
                <div className="w-[65%] h-[60%] bg-white"></div>
                <Button variant="secondary" className="w-[40%] text-white ">
                    <p>Gerar QR code novamente</p>
                </Button>
            </div>
            <div className="w-[40%] h-[30%] flex flex-col items-center justify-center p-4 gap-4  bg-[#0C1710] rounded-lg text-2xl text-white font-sans">
                <p>NÚMERO CONECTADO</p>
                <p className="p-2 bg-[#2B7345] rounded-lg w-full text-center">
                    +55 11 9XXXX-XXXX
                </p>
                <Button variant="red" className="w-full hover:bg-red-700" onClick={handleClick}>
                    <p>Desconectar</p>
                </Button>
            </div>
        </div>
    );
}

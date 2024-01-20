import { Button } from "../Button";

export default function GenerateQrCode({
    handleClick,
}: {
    handleClick: () => void;
}) {
    return (
        <div className="flex bg-green-dark h-[12rem] w-[30rem] rounded-lg items-center justify-center mr-72">
            <Button
                variant="secondary"
                className=" w-[50%] font-sans text-white"
                onClick={handleClick}
            >
                <p>Gerar QR code</p>
            </Button>
        </div>
    );
}

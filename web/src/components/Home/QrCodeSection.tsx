"use client";
import { useState } from "react";
import { GenerateQrCode } from "./GenerateQrCode";
import QrCodeWithNumber from "./QrCodeWithNumber";

export function QrCodeSection() {
    const [isConnected, setIsConnected] = useState(false);
    const handleClick = () => {
        console.log("oi");
        setIsConnected((prev) => !prev);
    };
    return (
        <section className="w-full h-full flex justify-around">
            {isConnected ? (
                <QrCodeWithNumber handleClick={handleClick} />
            ) : (
                <GenerateQrCode handleClick={handleClick} />
            )}
        </section>
    );
}

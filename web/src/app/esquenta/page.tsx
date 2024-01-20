"use client";

import LeftMenu from "@/components/LeftMenu";
import Header from "@/components/Header/Header";
import ConfiguracoesMenu from "@/components/Esquenta/Config";

export default function Esquenta() {
    return (
        <>
            <Header varFeatName="Esquenta" />
            <section className="px-4 grid grid-cols-[350px_75%] h-full justify-between pb-6">
                <LeftMenu 
                    whatsappVariant="secondary"
                    disparoVariant="secondary"
                    esquentaVariant="primary"
                />
                <div className="w-full h-full flex flex-col justify-center items-center gap-14 bg-[#0C1710] rounded-lg">
                    <ConfiguracoesMenu />
                </div>
            </section>
        </>
    );
}

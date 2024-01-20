import { QrCodeSection } from "@/components/Home/QrCodeSection";
import Header from "@/components/Header/Header";

import LeftMenu from "@/components/LeftMenu";

export default function page() {
    return (
        <>
        <Header varFeatName="Conectar WhatsApp" />
        <section className="px-4 grid grid-cols-[350px_75%] h-full justify-between pb-6">
            <LeftMenu />
            <QrCodeSection />
        </section>
        </>
    );
}

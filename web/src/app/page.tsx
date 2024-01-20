import { HeaderHome } from "@/components/Header/HeaderHome";
import { QrCodeSection } from "@/components/Home/QrCodeSection";
import LeftMenu from "@/components/LeftMenu";

export default function page() {
    return (
        <>
            <HeaderHome />
            <section className="px-4 grid grid-cols-[350px_60%] gap-2">
                <LeftMenu />
                <QrCodeSection />
            </section>
        </>
    );
}

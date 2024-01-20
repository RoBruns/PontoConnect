import { QrCodeSection } from "@/components/Home/QrCodeSection";

import LeftMenu from "@/components/LeftMenu";

export default function page() {
    return (
        <section className="px-4 grid grid-cols-[350px_65%] ">
            <LeftMenu />
            <QrCodeSection />
        </section>
    );
}

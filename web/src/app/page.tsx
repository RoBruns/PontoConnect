import { Header } from "@/components/Header/Header";
import LeftMenu from "@/components/LeftMenu";


export default function page() {
    return (
        <>
            <Header />
            <section className="px-4">
                <LeftMenu />
            </section>
        </>
    );
}

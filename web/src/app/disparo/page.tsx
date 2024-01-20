import Main from "@/components/Disparo/Main";
import Message from "@/components/Disparo/Message";
import MessageConfig from "@/components/Disparo/MessageConfig";
import LeftMenu from "@/components/LeftMenu";

export default function Disparo() {
    return (
        <section className="px-4 grid grid-cols-[320px_79%] h-full justify-between pb-6 ">
            <LeftMenu />
            <Main>
                <div className="flex w-full  px-5 ">
                    <Message />
                    <MessageConfig />
                </div>
            </Main>
        </section>
    );
}

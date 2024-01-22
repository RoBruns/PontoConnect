import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
    return <div className="h-full flex w-full bg-[#0C1710] rounded-lg">{children}</div>;
}

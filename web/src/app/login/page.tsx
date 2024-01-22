import Header from "@/components/Header/Header";

import LoginForm from "@/components/Login/LoginForm";
import TermsAndPolicy from "@/components/Login/TermsAndPolicy";

export default function Login() {
    return (
        <>
            <Header varFeatName="Login" />
            <div className="h-[75%] w-full flex flex-col items-center justify-center">
                <div className="w-[720px] h-[540px] bg-green-dark rounded-[15px] text-gray-50">
                    <LoginForm />
                </div>
                <TermsAndPolicy />
            </div>
        </>
    );
}

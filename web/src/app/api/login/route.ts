import { AuthResponse } from "@/hooks/useAuth";
import { serverApi } from "@/lib/api";
import { AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";

type SignInUserData = {
    login: string;
    password: string;
};

export async function POST(request: NextRequest) {
    try {
        const { login, password }: SignInUserData = await request.json();

        const res: AxiosResponse<AuthResponse> = await serverApi.post(
            "/auth/signin",
            {
                login,
                password,
            }
        );
        const { token } = res.data;

        const redirectTo = request.cookies.get("redirectTo")?.value;
        const redirectUrl = redirectTo ?? new URL("/", request.url);

        const cookieExpiresInSeconds = 60 * 60 * 24 * 10;

        return NextResponse.redirect(redirectUrl, {
            headers: {
                "Set-Cookie": `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
            },
        });
    } catch (err: any) {
        const { message } = err?.response.data;

        return NextResponse.json({ message });
    }
}

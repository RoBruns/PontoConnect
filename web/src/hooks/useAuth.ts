import { clientApi } from "@/lib/api";
import { AxiosResponse } from "axios";

export type AuthResponse = { token: string } & { message: string };
export function useAuth() {
    const onSubmit = async (login: string, password: string) => {
        const res: AxiosResponse<AuthResponse> = await clientApi.post(
            `api/login`,
            {
                login,
                password,
            }
        );
        if (res.data.message) {
            return;
        }
        window.location.href = "http://localhost:3000";
    };

    return {
        onSubmit,
    };
}

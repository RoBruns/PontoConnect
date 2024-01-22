import axios from "axios";

export const clientApi = axios.create({
    baseURL: "http://localhost:3000/",
});

export const serverApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER || "http://localhost:3333/",
});

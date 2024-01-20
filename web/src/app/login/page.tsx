

export default function Login() {
    const inputClass = "mb-[50px] rounded-xl outline-none h-[40px] w-[400px] p-2 text-gray-900 focus:border-green-600 focus:border-2 transition ease-in-out"
    const buttonClass = "text-lg rounded-xl p-1 flex w-[200px] justify-center pt-[6px] bg-green-primary text-gray-900 hover:bg-green-600 hover:scale-105 transition ease-in-out"


    return (
        <div className="h-[75%] w-full flex flex-col items-center justify-center">
            <div className="w-[720px] h-[540px] bg-green-dark rounded-[15px] text-gray-50">
                <form
                    action="/submit-your-login-form"
                    className="flex-col items-center justify-center flex h-[540px] p-40 font-sans"
                    method="post">

                    <div className="flex items-start flex-col ">
                        <label htmlFor="username">Login</label>
                        <input className={inputClass} type="text" id="username" name="username" required />
                    </div>
                    <div className="flex items-start flex-col">
                        <label htmlFor="password">Senha</label>
                        <input className={inputClass} type="password" id="password" name="password" required />
                    </div>
                    <div className="mt-5">
                        <button className={buttonClass} type="submit">Conectar-se</button>
                    </div>

                </form>
            </div>
            <div className="items-start w-[720px] text-gray-50">
                <p className="pl-5 pt-1 font-sans">
                    <a className="hover:underline" href="#">Termos de uso</a> |{" "}
                    <a className="hover:underline" href="#">Contato</a></p>
            </div>
        </div>
    )
}
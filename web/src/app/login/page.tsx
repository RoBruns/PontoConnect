export default function Login(){
    return (
        <div className="h-[75%] w-full flex flex-col items-center justify-center">
            <div className="w-[720px] h-[540px] bg-green-dark rounded-[15px] text-gray-50">
                    <form action="/submit-your-login-form" className="flex-col items-center justify-between flex h-[540px] p-44 font-sans" method="post">
                        <div className="flex items-start flex-col">
                            <label htmlFor="username">Login</label>
                            <input className="rounded" type="text" id="username" name="username" required/>
                        </div>
                        <div className="flex items-start flex-col">
                            <label htmlFor="password">Senha</label>
                            <input className="rounded" type="password" id="password" name="password" required/>
                        </div>
                        <div className="rounded p-1 flex items-center justify-center bg-green-500">
                            <button type="submit">Conectar-se</button>
                        </div>
                        
                    </form>
            </div>
            <div className="items-start w-[720px] text-gray-50">
                <p className="pl-5 pt-1 font-sans"><a className="hover:underline" href="#">Termos de uso</a> | <a className="hover:underline" href="#">Contato</a></p>
            </div>
        </div>
    )
}
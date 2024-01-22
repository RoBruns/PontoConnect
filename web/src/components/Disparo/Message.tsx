import { Button } from "../Button";

export default function Message() {
    return (
        <div className=" flex p-6 flex-col gap-28 mt-10 w-[60%]">
            <div className=" flex items-center gap-6">
                <label
                    htmlFor="file"
                    className="p-4 bg-[#2B7345] text-white w-[15rem] flex items-center justify-center rounded-full cursor-pointer"
                >
                    Carregar Base
                </label>
                <p className="text-white text-lg">base.xls</p>
                <input id="file" type="file" className="hidden" />
            </div>
            <div className="flex flex-col gap-4 ">
                <div className="flex  gap-2 items-center">
                    <p className="text-lg text-white">Variáveis: </p>

                    <p className="p-2 rounded-lg text-white bg-[#2B7362] w-[8rem] text-center">
                        Nome
                    </p>
                    <p className="p-2 rounded-lg text-white bg-[#2B7362] w-[8rem] text-center">
                        CPF
                    </p>
                    <p className="p-2 rounded-lg text-white bg-[#2B7362] w-[8rem] text-center">
                        Telefone
                    </p>
                </div>
                <div>
                    <p className="text-lg text-white">
                        {"Use ${variavel} para utiliza-las em sua mensagem"}
                    </p>
                    <p className="text-white">Mensagem:</p>
                    <textarea
                        className="h-full w-full resize-none bg-[#BEE9CE] rounded-sm"
                        rows={15}
                        cols={40}
                    >
                        {
                            "Olá ${nome} portador do CPF: ${Cpf} e do TELEFONE: ${Telefone}"
                        }
                    </textarea>
                </div>
            </div>
        </div>
    );
}

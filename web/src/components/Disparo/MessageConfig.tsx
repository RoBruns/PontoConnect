import { Button } from "../Button";

export default function MessageConfig() {
    return (
        <div className="flex flex-col  w-[50%] px-6 flex-grow">
            <div className="flex flex-col w-full h-full gap-10 justify-between mt-[12rem]">
                <div className="text-white flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <p className="text-white text-xl text-center font-sans ">
                            Configurações
                        </p>
                        <div className="h-[0.10rem] flex-grow bg-[#2B7345]" />
                    </div>
                    <div className="flex flex-col gap-16 text-lg">
                        <div className="fle flex-col ">
                            <label htmlFor="" className="flex  justify-center">
                                {"Intervalo (segundos)"}
                            </label>
                            <div className="flex gap-2 w-full">
                                <p>30</p>
                                <input
                                    type="range"
                                    max={120}
                                    className="flex-grow"
                                />
                                <p>120</p>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="flex  justify-center">
                                {"Descanso"}
                            </label>
                            <div className="flex gap-2 w-full">
                                <p>30</p>
                                <input
                                    type="range"
                                    max={120}
                                    className="flex-grow"
                                />
                                <p>120</p>
                            </div>
                            <p className="text-center mt-2">
                                A cada 20 mensagens
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center relative  justify-center mb-[3rem]">
                    <Button variant="primary" className="w-[10rem]">
                        <p>Enviar</p>
                    </Button>
                    <Button variant="red" className="w-[10rem]">
                        <p>Cancelar</p>
                    </Button>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { Button } from '../Button';
import './style.css';

export default function ConfiguracoesMenu() {
    const [grupo, setGrupo] = useState(false);
    const [audio, setAudio] = useState(false);
    const [imagem, setImagem] = useState(true);
    const [fluxo, setFluxo] = useState(50); 

    const handleEnviar = () => {
        console.log({ grupo, audio, imagem, fluxo });
    };

    const handleCancelar = () => {
        console.log("Configurações canceladas");
    };

    return (

        <div className="h-full w-full my-16 bg-dark-gray rounded-lg text-white flex flex-col items-center justify-around">
            <div>
                <h2 className='text-center'>CONFIGURAÇÕES</h2>
                <div className='bg-[#2B7345] h-[1px] w-[300px] mt-2'></div>
            </div>
            <label className="flex items-center justify-center w-full mb-4 gap-5"> 
                Grupos
                <input type="checkbox" className="ios8-switch" checked={grupo} onChange={() => setGrupo(!grupo)} />
                <span></span>
            </label>
            <label className="flex items-center justify-center w-full mb-4 gap-5">
                Áudio
                <input type="checkbox" className="ios8-switch" checked={audio} onChange={() => setAudio(!audio)} />
                <span></span>
            </label>
            <label className="flex items-center justify-center w-full mb-4 gap-5">
                Imagem
                <input type="checkbox" className="ios8-switch" checked={imagem} onChange={() => setImagem(!imagem)} />
                <span></span>
            </label>
            <div className="flex items-center justify-center w-full mb-4 gap-5">
                <span className='pt-8'>Lento</span>
                <div className='flex flex-col items-center gap-2'>
                <label>Fluxo</label>
                <input
                type="range"
                min="0"
                max="100"
                value={fluxo}
                onChange={(e) => setFluxo(e.target.valueAsNumber)}
                className="w-64"
                />
            </div>
                <span className='pt-8'>Rápido</span>
            </div>
            <div className="flex justify-center w-full mt-8">
                <Button variant="primary" className="mr-2" onClick={handleEnviar}>
                    ENVIAR
                </Button>
                <Button variant="red" className='hover:bg-red-700' onClick={handleCancelar}>
                    CANCELAR
                </Button>
            </div>
        </div>
    );
}
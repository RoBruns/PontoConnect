import Image from 'next/image';


export default function Header() {
    return (
        <header>
            <div className='m-6 flex items-center'> 
                <Image
                    src="/icon.png"
                    alt="ZapBot"
                    width={85}
                    height={85}
                /> 
                <h1 className='font-logo text-gray-100 text-[40px]'>ZapBot</h1>
            </div>
        </header>
    )
}
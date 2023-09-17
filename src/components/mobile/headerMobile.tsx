import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"

function HeaderMobile() {
    return (
        <header className="w-full h-screen flex bg-cover bg-center xs:flex lg:hidden rounded-br-3xl relative" style={{ backgroundImage: 'url(/images/profile-photo2.jpg)' }}>
            <div className="w-full h-full flex flex-col items-start justify-center">
                <h1 className="text-5xl text-blue-500 pb-4 pl-8">BH CREATIVE</h1>
                <h2 className="text-white pr-6 pl-8 text-sm ">
                    Nos especializamos en elevar el estatus de tu marca personal y comercial.
                    Expandiendo y mejorando tu alcance a nivel web usando redes sociales, aplicaciones y
                    páginas web. Esto te va a hacer pertenecer al grupo de emprendedores y negocios exitosos. No
                    te quedes atrás. Sigue leyendo para poder informarte de con que trabajamos y podemos
                    ayudarte para alcanzar un nuevo nivel en tu negocio, empresa y marca.
                </h2>
                <div className=" pl-8 pt-4">
                    <button className="px-4 rounded-md bg-blue-500 font-semibold text-white text-base">Contáctanos</button>
                </div>
                <div className="absolute bottom-24 right-5">
                    <button className="p-2 rounded-full text-white bg-blue-500"><AiFillCaretLeft size={15} /></button>
                </div>
                <div className="absolute bottom-12 right-5">
                    <button className="p-2 rounded-full text-white bg-blue-500"><AiFillCaretRight size={15} /></button>
                </div>
            </div>
        </header>
    )
}

export default HeaderMobile
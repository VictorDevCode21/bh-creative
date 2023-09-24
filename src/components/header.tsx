import Image from "next/image"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import { useState } from 'react'


function Header() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/images/profile-photo6.jpg',
        '/images/profile-photo3.jpg',
        '/images/profile-photo4.jpg',
        '/images/profile-photo5.jpg',
    ]

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };
    return (
        <header id="home" className="w-full h-screen lg:flex xs:hidden">
            <div className="w-1/2 h-full relative z-50">
                <Image className="w-full h-4/5 rounded-br-3xl"
                    src={slides[currentSlide]}
                    alt=""
                    width={1080}
                    height={1080}
                />
                <h1 className="absolute top-24 left-3/4 pl-10 text-7xl text-cyan-400">BH CREATIVE</h1>
                <div className="absolute bottom-52 right-5">
                    <button className="p-2 rounded-full text-white bg-cyan-400" onClick={goToPreviousSlide}><AiFillCaretLeft size={10} /></button>
                </div>
                <div className="absolute bottom-60 right-5">
                    <button className="p-2 rounded-full text-white bg-cyan-400" onClick={goToNextSlide}><AiFillCaretRight size={10} /></button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center ">
                <h2 className="pt-20 pl-6 pb-6 lg:text-lg xs:text-base">
                    Nos especializamos en elevar el estatus de tu marca personal y comercial.
                    Expandiendo y mejorando tu alcance a nivel web usando redes sociales, aplicaciones y
                    páginas web. Esto te va a hacer pertenecer al grupo de emprendedores y negocios exitosos. No
                    te quedes atrás... Sigue leyendo para poder informarte de con que trabajamos y podemos
                    ayudarte para alcanzar un nuevo nivel en tu negocio, empresa y marca.
                </h2>
                <a href="mailto:bhcreativecorp@gmail.com" className="pl-6 ">
                    <button className="px-4 rounded-md bg-cyan-500 font-semibold text-white text-xl">Contáctanos</button>
                </a>
            </div>
        </header>
    )
}

export default Header
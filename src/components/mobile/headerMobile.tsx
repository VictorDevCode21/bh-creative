'use client'

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import {useState} from 'react'

function HeaderMobile() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "/images/profile-mobile3.jpg",
        "/images/profile-mobile1.jpg",
        "/images/profile-mobile2.jpg",
        "/images/profile-mobile4.jpg",
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

    const backgroundStyle = {
        backgroundImage: `url(${slides[currentSlide]})`,
    };

    return (
        <header id="homem" className="w-full h-screen flex bg-cover  xs:flex lg:hidden rounded-br-3xl relative" style={backgroundStyle}>
            <div className="w-full h-full flex flex-col items-start justify-center">
                <h1 className="text-5xl text-cyan-400 pb-4 pl-8">BH CREATIVE</h1>
                <h2 className="text-white pr-6 pl-8 text-sm ">
                    Harness the Power of Automation with BH Creative: <br></br> Elevate Your Business Through E-commerce, PIM, DAM, and Digital Marketing Solutions.
                </h2>
                <a href="mailto:info@bhcreativecorp.com" className=" pl-8 pt-4">
                    <button className="px-4 rounded-md bg-cyan-400 font-semibold text-white text-base">Contact Us</button>
                </a>
                <div className="absolute bottom-24 right-5">
                    <button className="p-2 rounded-full text-white bg-cyan-400" onClick={goToPreviousSlide}><AiFillCaretLeft size={15} /></button>
                </div>
                <div className="absolute bottom-12 right-5">
                    <button className="p-2 rounded-full text-white bg-cyan-400" onClick={goToNextSlide}><AiFillCaretRight size={15} /></button>
                </div>
            </div>
        </header>
    )
}

export default HeaderMobile
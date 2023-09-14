import Image from "next/image"
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"

function Header() {
    return (
        <header className="w-full h-screen flex ">
            <div className="w-1/2 h-full relative z-50">
                <Image className="w-full h-full rounded-br-3xl" src="/images/profile-photo.jpg" alt="photo-1" width={1080} height={1080} />
                <h1 className="absolute top-56 left-3/4 pl-10 text-6xl text-blue-500">BH CREATIVE</h1>
                <div className="absolute bottom-16 right-5">
                    <button className="p-2 rounded-full text-white bg-blue-500"><AiFillCaretLeft size={10}/></button>
                </div>
                <div className="absolute bottom-8 right-5">
                    <button className="p-2 rounded-full text-white bg-blue-500"><AiFillCaretRight size={10}/></button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center ">
                <h2 className="pt-48 pl-6 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates quasi 
                    impedit necessitatibus esse. Doloribus optio, voluptas 
                    aspernatur laborum atque velit? Deleniti quisquam quasi veritatis eveniet molestiae 
                    accusantium est voluptas.
                </h2>
                <div className="pl-6 ">
                    <button className="px-4 rounded-md bg-blue-500">Contáctanos</button>
                </div>
            </div>
        </header>
    )
}

export default Header
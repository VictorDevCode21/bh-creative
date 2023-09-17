import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import { FaXTwitter} from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="w-full h-full flex md:pt-10 xs:pt-40 xs:pl-4 xs:pr-4 md:pr-0 md:pl-0">
            <div className="md:w-1/2 xs:w-1/3  md:h-20 xs:h-28 flex items-center justify-center">
                <p className="text-2xl font-semibold">Nuestras redes sociales</p>
            </div>
            <div className="md:w-1/2 xs:w-2/3  md:h-20 xs:h-28 flex items-center justify-between md:pl-28 md:pr-28">
                <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                    <Link href="https://www.instagram.com/bh_creativecorp/">
                        <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                            <FaInstagram size={20} />
                        </button>
                    </Link>
                </div>
                <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                    <Link href="https://www.instagram.com/bh_creativecorp/">
                        <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                            <FaWhatsapp size={20} />
                        </button>
                    </Link>
                </div>
                <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                    <a href="mailto:bhcreativecorp@gmail.com">
                        <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                            <SiGmail size={20} />
                        </button>
                    </a>
                </div>
                <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                    <Link href="https://www.instagram.com/bh_creativecorp/">
                        <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                            <FaTiktok size={20} />
                        </button>
                    </Link>
                </div>
                <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                    <Link href="https://www.instagram.com/bhcreative_/">
                        <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                            <FaXTwitter size={20} />
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
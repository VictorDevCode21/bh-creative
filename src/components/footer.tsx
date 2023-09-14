import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import { FaXTwitter} from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="w-full h-full flex pt-10">
            <div className="w-1/2 h-20 flex items-center justify-center">
                <p className="text-2xl font-semibold">Nuestras redes sociales</p>
            </div>
            <div className="w-1/2 h-20 flex items-center justify-between pl-28 pr-28">
                <div>
                    <Link href="https://www.instagram.com/bhcreative_/">
                        <button>
                            <FaInstagram size={20} />
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="https://www.instagram.com/bhcreative_/">
                        <button>
                            <FaWhatsapp size={20} />
                        </button>
                    </Link>
                </div>
                <div>
                    <a href="mailto:bhcreativecorp@gmail.com">
                        <button>
                            <SiGmail size={20} />
                        </button>
                    </a>
                </div>
                <div>
                    <Link href="https://www.instagram.com/bhcreative_/">
                        <button>
                            <FaTiktok size={20} />
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="https://www.instagram.com/bhcreative_/">
                        <button>
                            <FaXTwitter size={20} />
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
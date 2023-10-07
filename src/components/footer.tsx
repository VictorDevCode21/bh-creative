import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import Link from 'next/link'

function Footer() {
    return (
        <footer id='contact' className="w-full h-60 flex md:pt-10 xs:pt-0 xs:pl-4 xs:pr-4 md:pr-0 md:pl-0 ">
            <div className="md:w-1/2 xs:w-1/3  md:h-full xs:h-full flex items-center justify-center border-t-2 border-gray-400">
                <h2 className="text-2xl font-semibold">Contact Methods</h2>
            </div>
            <div className='flex flex-col md:w-1/2 xs:w-2/3  md:h-full xs:h-28  md:pl-28 md:pr-28 border-t-2 border-gray-400 '>
                <div className='pl-10 pb-4 pt-6 text-left'>
                    <p className='font-semibold lg:text-lg'>UNITED STATES</p>
                </div>
                <div className="md:w-full xs:w-full  md:h-full xs:h-28 flex  justify-between md:pl-10 md:pr-10 lg:pb-2">
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <Link href="https://www.instagram.com/bh.creativeusa/">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <FaInstagram size={20} />
                            </button>
                        </Link>
                    </div>
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <Link href="http://wa.me/+584242082286">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <FaWhatsapp size={20} />
                            </button>
                        </Link>
                    </div>
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <a href="mailto:info@bhcreativecorp.com">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <SiGmail size={20} />
                            </button>
                        </a>
                    </div>
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <Link href="https://www.tiktok.com/@bhcreativeusa">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <FaTiktok size={20} />
                            </button>
                        </Link>
                    </div>
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <Link href="https://twitter.com/bhcreativecorp">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <FaXTwitter size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='pl-10 pb-4 pt-6 text-left'>
                    <p className='font-semibold lg:text-lg'>LATINOAMÉRICA</p>
                </div>
                <div className="md:w-full xs:w-full  md:h-full xs:h-28 flex  justify-between md:pl-10 md:pr-10 lg:pb-8">
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <Link href="https://www.instagram.com/bh.creativecorp/">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <FaInstagram size={20} />
                            </button>
                        </Link>
                    </div>
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <Link href="http://wa.me/+584242082286">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <FaWhatsapp size={20} />
                            </button>
                        </Link>
                    </div>
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <a href="mailto:info@bhcreativecorp.com">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <SiGmail size={20} />
                            </button>
                        </a>
                    </div>
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <Link href="https://www.tiktok.com/@bhcreative">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <FaTiktok size={20} />
                            </button>
                        </Link>
                    </div>
                    <div className='xs:pl-1 xs:pr-1 md:pr-0 md:pl-0'>
                        <Link href="https://twitter.com/bhcreativecorp">
                            <button className="p-2 shadow-md shadow-gray-400 rounded-full">
                                <FaXTwitter size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
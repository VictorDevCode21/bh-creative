import Image from "next/image"


function LatestProjects() {
    return (
        <section id="projects" className='w-full h-full lg:flex flex-col '>
            <div className="lg:w-full lg:h-48 lg:pt-20 flex lg:items-center lg:justify-center pb-6 xs:h-20 xs:pt-24 xs:pl-4 xs:pb-16">
                <p className="font-bold text-2xl text-cyan-400">Nuestros más recientes proyectos</p>
            </div>
            <div className='lg:w-full lg:h-96 flex pb-6 xs:w-full xs:h-96 xs:flex-col lg:flex-row xs:pl-4 xs:pr-4'>
                <div className='lg:w-1/2 lg:h-full lg:pl-28 xs:w-full xs:h-1/2'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/portfolio-personal.JPG" alt="photo" width={1080} height={720}/>
                </div>
                <div className='lg:w-1/2 lg:h-full lg:pr-28 lg:pl-10 xs:w-full xs:h-1/2 flex flex-col justify-center items-center '>
                    <h3 className="font-bold text-2xl pb-4">Portafolio web</h3>
                    <p className=" xs:text-xs lg:text-lg">Este portafolio fue creado con el fin de mostrar desarrollos web de uno de nuestros programadores. 
                        En el mismo figuran sus proyectos más recientes, así como sus datos de contacto.  
                    </p>
                    <p className="pt-2 xs:text-xs lg:text-lg">Teck Stack: #Nextjs, #Typescript, #Postgresql, #Tailwindcss, #Prisma, #AWS</p>
                </div>
            </div>
            <div className='lg:w-full lg:h-96 xs:w-full xs:h-96 xs:flex-col lg:flex-row-reverse flex flex-row-reverse pb-6 xs:pl-4 xs:pr-4'>
                <div className='lg:w-1/2 lg:h-full lg:pr-28 xs:w-full xs:h-1/2'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/decopint2.JPG" alt="photo" width={1080} height={720}/>
                </div>
                <div className='lg:w-1/2 lg:h-full lg:pl-28 lg:pr-6 xs:w-full xs:h-1/2 flex flex-col justify-center items-start '>
                    <h3 className="font-bold text-2xl pb-4 lg:pl-28">Website para empresas</h3>
                    <p className="pt-2 lg:text-lg">Este sitio web lo realizamos para un negocio que realiza trabajos de mantenimiento 
                        de pisos en la ciudad de Caracas, Venezuela.  
                    </p>
                    <p className="pt-2 lg:text-lg ">Teck Stack: #Nextjs, #Typescript, #Tailwindcss, #DigitalOcean</p>
                </div>
            </div>
        </section>
    )
}

export default LatestProjects
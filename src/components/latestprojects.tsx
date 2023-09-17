import Image from "next/image"


function LatestProjects() {
    return (
        <section className='w-full h-screen lg:flex flex-col xs:hidden'>
            <div className="w-full h-full flex items-center justify-center pb-6">
                <p className="font-bold text-2xl text-blue-500">Nuestros más recientes proyectos</p>
            </div>
            <div className='w-full h-1/3 flex pb-6'>
                <div className='w-1/2 h-full pl-28'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/profile-photo2.jpg" alt="photo" width={1080} height={720}/>
                </div>
                <div className='w-1/2 h-full pr-28 pl-10'>
                    <h3>Portafolio Personal</h3>
                    <p>Este portafolio fue creado con el fin de mostrar desarrollos web de uno de nuestros programadores. 
                        En el mismo figuran sus proyectos más recientes, así como sus datos de contacto.  
                    </p>
                    <p className="pt-2">Teck Stack: #Nextjs, #Typescript, #Prisma, #AWS</p>
                </div>
            </div>
            <div className='w-full h-1/3 flex flex-row-reverse pb-6'>
                <div className='w-1/2 h-full pr-28'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/profile-photo2.jpg" alt="photo" width={1080} height={720}/>
                </div>
                <div className='w-1/2 h-full pl-28 pr-10'>
                    <h3>Website Personal</h3>
                    <p className="pt-2">Este sitio web lo realizamos para una clienta que quería mostrar un poco sobre su vida y
                        algunos consejos que aplica en su día a día como Empresaria y Mamá. 
                    </p>
                    <p className="pt-2">Teck Stack: #Nextjs, #Typescript</p>
                </div>
            </div>
            <div className='w-full h-1/3 flex pb-6'>
                <div className='w-1/2 h-full pl-28'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/profile-photo2.jpg" alt="photo" width={1080} height={720}/>
                </div>
                <div className='w-1/2 h-full pr-28 pl-10'>
                    <h3>E-commerce Website</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi doloribus accusantium vitae 
                        aliquid reprehenderit iste excepturi, 
                        aut voluptatem consequuntur illum fuga dolor ipsam nulla quae non eius soluta ab tempore.
                    </p>
                    <p className="pt-2">Teck Stack: #Nextjs, #Typescript, #Prisma, #Postgresql</p>
                </div>
            </div>
        </section>
    )
}

export default LatestProjects
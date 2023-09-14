import Image from "next/image"


function LatestProjects() {
    return (
        <section className='w-full h-screen flex flex-col'>
            <div className="w-full h-full flex items-center justify-center pb-6">
                <p className="font-bold text-2xl text-blue-500">Nuestros más recientes proyectos</p>
            </div>
            <div className='w-full h-1/3 flex pb-6'>
                <div className='w-1/2 h-full pl-28'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/profile-photo2.jpg" alt="photo" width={1080} height={720}/>
                </div>
                <div className='w-1/2 h-full pr-28 pl-10'>
                    <h3>Title Project</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi doloribus accusantium vitae 
                        aliquid reprehenderit iste excepturi, 
                        aut voluptatem consequuntur illum fuga dolor ipsam nulla quae non eius soluta ab tempore.
                    </p>
                </div>
            </div>
            <div className='w-full h-1/3 flex flex-row-reverse pb-6'>
                <div className='w-1/2 h-full pr-28'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/profile-photo2.jpg" alt="photo" width={1080} height={720}/>
                </div>
                <div className='w-1/2 h-full pl-28 pr-10'>
                    <h3>Title Project</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi doloribus accusantium vitae 
                        aliquid reprehenderit iste excepturi, 
                        aut voluptatem consequuntur illum fuga dolor ipsam nulla quae non eius soluta ab tempore.
                    </p>
                </div>
            </div>
            <div className='w-full h-1/3 flex pb-6'>
                <div className='w-1/2 h-full pl-28'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/profile-photo2.jpg" alt="photo" width={1080} height={720}/>
                </div>
                <div className='w-1/2 h-full pr-28 pl-10'>
                    <h3>Title Project</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi doloribus accusantium vitae 
                        aliquid reprehenderit iste excepturi, 
                        aut voluptatem consequuntur illum fuga dolor ipsam nulla quae non eius soluta ab tempore.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LatestProjects
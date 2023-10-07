import Image from "next/image"


function LatestProjects() {
    return (
        <section id="latest-projects" className='w-full h-full lg:flex flex-col'>
            <div className="lg:w-full lg:h-48 lg:pt-20 flex lg:items-center lg:justify-center pb-6 xs:h-20 xs:pt-24 xs:pl-4 xs:pb-16">
                <h2 className="font-bold text-2xl text-cyan-400">Our Latest Projects</h2>
            </div>
            <div className='lg:w-full lg:h-96 flex pb-6 xs:w-full xs:h-96 xs:flex-col lg:flex-row xs:pl-4 xs:pr-4'>
                <div className='lg:w-1/2 lg:h-full lg:pl-28 xs:w-full xs:h-1/2'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/portfolio-personal.JPG" alt="Portfolio" width={1080} height={720} />
                </div>
                <div className='lg:w-1/2 lg:h-full lg:pr-28 lg:pl-10 xs:w-full xs:h-1/2 flex flex-col justify-center items-center '>
                    <h3 className="font-bold text-2xl pb-4">Web Portfolio</h3>
                    <p className="xs:text-sm lg:text-lg">This portfolio showcases recent web developments by one of our programmers along with their contact information.</p>
                    <p className="pt-2 xs:text-sm lg:text-lg">Tech Stack: #Nextjs, #Typescript, #Postgresql, #Tailwindcss, #Prisma, #AWS</p>
                </div>
            </div>
            <div className='lg:w-full lg:h-96 xs:w-full xs:h-96 xs:flex-col lg:flex-row-reverse flex flex-row-reverse pb-6 xs:pl-4 xs:pr-4'>
                <div className='lg:w-1/2 lg:h-full lg:pr-28 xs:w-full xs:h-1/2'>
                    <Image className="w-full h-full shadow-2xl shadow-gray-400" src="/images/decopint2.JPG" alt="Website for Businesses" width={1080} height={720} />
                </div>
                <div className='lg:w-1/2 lg:h-full lg:pl-28 lg:pr-6 xs:w-full xs:h-1/2 flex flex-col justify-center lg:items-start xs:items-center  '>
                    <h3 className="font-bold text-2xl pb-4 lg:pl-28">Business Website</h3>
                    <div className="flex flex-col items-start">
                        <p className="pt-2 lg:text-lg xs:text-sm">We created this website for a business specializing in floor maintenance in Caracas, Venezuela.</p>
                        <p className="pt-2 lg:text-lg xs:text-sm">Tech Stack: #Nextjs, #Typescript, #Tailwindcss, #DigitalOcean</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestProjects

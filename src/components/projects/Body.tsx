import Socialmedia from "./Socialmedia"
import Image from "next/image"

function ProjectsBody() {
    return (
        <section className="w-full h-full text-dark dark:text-light">
            <div className="xs:text-center lg:text-left">
                <h2 className=" xs:pt-10  xs:text-xl xs:font-semibold text-cyan-400 lg:font-semibold lg:text-2xl lg:pl-10 lg:pt-20">Instagram Accounts Growth</h2>
            </div>
            <div className="flex xs:flex-col xs:pt-8 lg:flex-row justify-between lg:pl-10 lg:pr-10 lg:pt-6">
                <div className="xs:pt-0 lg:pt-0">
                    <Socialmedia url="https://www.instagram.com/p/CyEYSuCu0ds/" />
                </div>
                <div className="xs:pt-6 lg:pt-0">
                    <Socialmedia url="https://www.instagram.com/p/Cx_Zq9guLtt/" />
                </div>
                <div className="xs:pt-6 lg:pt-0">
                    <Socialmedia url="https://www.instagram.com/p/Cxx6xtPuhNQ/?img_index=1" />
                </div>
            </div>
            <div className="xs:text-center lg:text-left">
                <h2 className=" xs:pt-10 xs:font-semibold xs:text-xl text-cyan-400 lg:font-semibold lg:text-3xl lg:pl-10 lg:pt-20">Designs of companies logos</h2>
            </div>
            <div className="flex xs:flex-col lg:flex-row justify-between lg:pl-10 lg:pr-10 lg:pt-6">
                <div className="xs:pl-12 xs:pt-10 xs:pr-12 lg:pt-0 lg:pr-0 lg:pl-0">
                    <Image className="w-96 h-96" src="/images/designs/designs-1.jfif" alt="design-1" width={2460} height={1980} />
                </div>
                <div className="xs:pl-12 xs:pt-10 xs:pr-12 lg:pt-0 lg:pr-0 lg:pl-0">
                    <Image className="w-96 h-96" src="/images/designs/designs-2.jfif" alt="design-2" width={2460} height={1980} />
                </div>
                <div className="xs:pl-12 xs:pt-10 xs:pr-12 lg:pt-0 lg:pr-0 lg:pl-0">
                    <Image className="w-96 h-96" src="/images/designs/designs-3.jfif" alt="design-3" width={2460} height={1980} />
                </div>
            </div>
            <div className="xs:text-center lg:text-left">
                <h2 className="xs:pt-6 xs:font-semibold xs:text-xl text-cyan-400 lg:font-semibold lg:text-3xl lg:pl-10 lg:pt-20">Website for business</h2>
            </div>
            <div className="flex w-full xs:flex-col lg:flex-row justify-between lg:pl-10 lg:pr-10 lg:pt-6">
                <div className="lg:w-1/3 lg:pr-4 lg:pt-0 lg:pl-0 xs:pl-10 xs:pr-10 xs:pt-6">
                    <Image className="w-full h-80" src="/images/portfolio-personal.JPG" alt="websites-1" width={2460} height={1980} />
                </div>
                <div className="lg:w-1/3 lg:pt-0 lg:pl-0 lg:pr-0 xs:pl-10 xs:pr-10 xs:pt-6">
                    <Image className="w-full h-80" src="/images/decopint2.JPG" alt="websites-2" width={2460} height={1980} />
                </div>
                <div className="lg:w-1/3 lg:pl-4 lg:pr-0 lg:pt-0 lg:pb-0 xs:pb-10 xs:pl-10 xs:pr-10 xs:pt-6">
                    <Image className="w-full h-80" src="/images/portfolio-personal.JPG" alt="websites-3" width={2460} height={1980} />
                </div>
            </div>
        </section>
    )
}

export default ProjectsBody
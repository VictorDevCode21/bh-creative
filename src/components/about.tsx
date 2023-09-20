import Image from "next/image"
import { SiGmail,SiJavascript,SiMysql,SiNodedotjs,SiAdobeillustrator,SiAdobepremierepro,SiCanva,SiFlutter,  SiTypescript, SiPrisma, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiGit, SiGithub, SiMongodb, SiJest, SiCypress, SiAdobephotoshop } from 'react-icons/si'

function About() {
    return (
        <section id="about" className="w-full h-screen md:flex xs:hidden">
            <div className="w-1/2 h-full flex items-center justify-center md:pl-28">
                <Image src="/images/about-photo.jpg" alt="about" width={1080} height={720} />
            </div>
            <div className="w-1/2 h-full flex flex-col  justify-center">
                <div className="pb-0 md:pl-20 md:pr-20">
                    <p className=" text-3xl text-cyan-400 font-bold">Sobre nosotros</p>
                    <p className="pt-2 ">
                        Somos una empresa dedicada al marketing y desarrollo web y mobile, con el objetivo de ayudar 
                        a las empresas a crecer y a tener una mejor presencia en internet. Proveemos todo lo que requieres 
                        para elevar tu negocio al siguiente nivel. 
                    </p>
                    <div className="pt-4 flex w-full items-center">
                        <p>Páginas web</p>
                        <div className=" flex justify-between">
                            <div className="pl-4">
                                <SiJavascript size={15} />
                            </div>
                            <div className="pl-4">
                                <SiTypescript size={15} />
                            </div>
                            <div className="pl-4">
                                <SiNextdotjs size={15} />
                            </div>
                            <div className="pl-4">
                                <SiReact size={15} />
                            </div>
                            <div className="pl-4">
                                <SiTailwindcss size={15} />
                            </div>
                            <div className="pl-4">
                                <SiPrisma size={15} />
                            </div>
                            <div className="pl-4">
                                <SiPostgresql size={15} />
                            </div>
                            <div className="pl-4">
                                <SiMongodb size={15} />
                            </div>
                            <div className="pl-4">
                                <SiJest size={15} />
                            </div>
                            <div className="pl-4">
                                <SiCypress size={15} />
                            </div>
                            <div className="pl-4">
                                <SiGit size={15} />
                            </div>
                            <div className="pl-4">
                                <SiGithub size={15} />
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 flex w-full items-center">
                        <p>Diseño gráfico</p>
                        <div className=" flex justify-between">
                            <div className="pl-4">
                                <SiAdobephotoshop size={15} />
                            </div>
                            <div className="pl-4">
                                <SiAdobeillustrator size={15} />
                            </div>
                            <div className="pl-4">
                                <SiCanva size={15} />
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 flex w-full items-center">
                        <p>Community manager</p>
                        <div className=" flex justify-between">
                            <div className="pl-4">
                                <SiAdobephotoshop size={15} />
                            </div>
                            <div className="pl-4">
                                <SiAdobeillustrator size={15} />
                            </div>
                            <div className="pl-4">
                                <SiCanva size={15} />
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 flex w-full items-center">
                        <p>Edición de videos</p>
                        <div className=" flex justify-between">
                            <div className="pl-4">
                                <SiAdobephotoshop size={15} />
                            </div>
                            <div className="pl-4">
                                <SiAdobeillustrator size={15} />
                            </div>
                            <div className="pl-4">
                                <SiCanva size={15} />
                            </div>
                            <div className="pl-4">
                                <SiAdobepremierepro size={15} />
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 flex w-full items-center">
                        <p>Copywriting</p>
                        <div className=" flex justify-between">
                            <div className="pl-4">
                                <SiAdobephotoshop size={15} />
                            </div>
                            <div className="pl-4">
                                <SiGmail size={15} />
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 flex w-full items-center">
                        <p>Aplicaciones Mobile</p>
                        <div className=" flex justify-between">
                            <div className="pl-4">
                                <SiFlutter size={15} />
                            </div>
                            <div className="pl-4">
                                <SiNodedotjs size={15} />
                            </div>
                            <div className="pl-4">
                                <SiReact size={15} />
                            </div>
                            <div className="pl-4">
                                <SiMysql size={15} />
                            </div>
                            <div className="pl-4">
                                <SiPostgresql size={15} />
                            </div>
                            <div className="pl-4">
                                <SiMongodb size={15} />
                            </div>
                            <div className="pl-4">
                                <SiPrisma size={15} />
                            </div>
                            <div className="pl-4">
                                <SiGit size={15} />
                            </div>
                            <div className="pl-4">
                                <SiGithub size={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
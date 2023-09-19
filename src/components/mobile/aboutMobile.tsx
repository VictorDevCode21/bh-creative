import Image from "next/image"
import { SiGmail, SiJavascript, SiMysql, SiNodedotjs, SiAdobeillustrator, SiAdobepremierepro, SiCanva, SiFlutter, SiTypescript, SiPrisma, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiGit, SiGithub, SiMongodb, SiJest, SiCypress, SiAdobephotoshop } from 'react-icons/si'

function AboutMobile() {
    return (
        <section id="aboutm" className="w-full h-full md:hidden xs:flex xs:flex-col pt-20 pb-48">
            <div  className="w-full h-64 pl-4 pr-4">
                <Image src="/images/profile-photo2.jpg" alt="profile-photo3.jpg" width={500} height={500} />
            </div>
            <div className="w-full h-48 pl-4 pr-4">
                <p className=" text-2xl text-cyan-400 font-bold pt-4">Sobre nosotros</p>
                <p className="pt-2">
                    Somos una empresa dedicada al marketing y desarrollo web y mobile, con el objetivo de ayudar
                    a las empresas a crecer y a tener una mejor presencia en internet. Proveemos todo lo que requieres
                    para elevar tu negocio al siguiente nivel.
                </p>
                <div className="pt-2 flex w-full items-center">
                    <p>Paginas web</p>
                    <div className=" flex justify-between">
                        <div className="pl-2">
                            <SiJavascript size={15} />
                        </div>
                        <div className="pl-2">
                            <SiTypescript size={15} />
                        </div>
                        <div className="pl-2">
                            <SiNextdotjs size={15} />
                        </div>
                        <div className="pl-2">
                            <SiReact size={15} />
                        </div>
                        <div className="pl-2">
                            <SiTailwindcss size={15} />
                        </div>
                        <div className="pl-2">
                            <SiPrisma size={15} />
                        </div>
                        <div className="pl-2">
                            <SiPostgresql size={15} />
                        </div>
                        <div className="pl-2">
                            <SiMongodb size={15} />
                        </div>
                        <div className="pl-2">
                            <SiJest size={15} />
                        </div>
                        <div className="pl-2">
                            <SiCypress size={15} />
                        </div>
                        <div className="pl-2">
                            <SiGit size={15} />
                        </div>
                        <div className="pl-2">
                            <SiGithub size={15} />
                        </div>
                    </div>
                </div>
                <div className="pt-2 flex w-full items-center">
                    <p>Diseño gráfico</p>
                    <div className=" flex justify-between">
                        <div className="pl-2">
                            <SiAdobephotoshop size={15} />
                        </div>
                        <div className="pl-2">
                            <SiAdobeillustrator size={15} />
                        </div>
                        <div className="pl-2">
                            <SiCanva size={15} />
                        </div>
                    </div>
                </div>
                <div className="pt-2 flex w-full items-center">
                    <p>Community Manager</p>
                    <div className=" flex justify-between">
                        <div className="pl-2">
                            <SiAdobephotoshop size={15} />
                        </div>
                        <div className="pl-2">
                            <SiAdobeillustrator size={15} />
                        </div>
                        <div className="pl-2">
                            <SiCanva size={15} />
                        </div>
                    </div>
                </div>
                <div className="pt-2 flex w-full items-center">
                    <p>Edicion de videos</p>
                    <div className=" flex justify-between">
                        <div className="pl-2">
                            <SiAdobephotoshop size={15} />
                        </div>
                        <div className="pl-2">
                            <SiAdobeillustrator size={15} />
                        </div>
                        <div className="pl-2">
                            <SiCanva size={15} />
                        </div>
                        <div className="pl-2">
                            <SiAdobepremierepro size={15} />
                        </div>
                    </div>
                </div>
                <div className="pt-2 flex w-full items-center">
                    <p>Copywriting</p>
                    <div className=" flex justify-between">
                        <div className="pl-2">
                            <SiAdobephotoshop size={15} />
                        </div>
                        <div className="pl-2">
                            <SiGmail size={15} />
                        </div>
                    </div>
                </div>
                <div className="pt-2 flex w-full items-center">
                    <p>Aplicaciones Mobile</p>
                    <div className=" flex justify-between">
                        <div className="pl-2">
                            <SiFlutter size={15} />
                        </div>
                        <div className="pl-2">
                            <SiNodedotjs size={15} />
                        </div>
                        <div className="pl-2">
                            <SiReact size={15} />
                        </div>
                        <div className="pl-2">
                            <SiMysql size={15} />
                        </div>
                        <div className="pl-2">
                            <SiPostgresql size={15} />
                        </div>
                        <div className="pl-2">
                            <SiMongodb size={15} />
                        </div>
                        <div className="pl-2">
                            <SiPrisma size={15} />
                        </div>
                        <div className="pl-2">
                            <SiGit size={15} />
                        </div>
                        <div className="pl-2">
                            <SiGithub size={15} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMobile
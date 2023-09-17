import Image from "next/image"
import { SiGmail, SiJavascript, SiMysql, SiNodedotjs, SiAdobeillustrator, SiAdobepremierepro, SiCanva, SiFlutter, SiTypescript, SiPrisma, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiGit, SiGithub, SiMongodb, SiJest, SiCypress, SiAdobephotoshop } from 'react-icons/si'

function AboutMobile() {
    return (
        <section className="w-full h-full md:hidden xs:flex xs:flex-col pt-96">
            <div className="w-full h-64 pl-4 pr-4">
                <Image src="/images/profile-photo2.jpg" alt="profile-photo3.jpg" width={500} height={500} />
            </div>
            <div className="w-full h-48 pl-4 pr-4">
                <p className=" text-2xl text-blue-500 font-bold">Sobre nosotros</p>
                <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sed nemo minima consequatur inventore
                    molestiae quae?
                    Modi beatae sapiente nemo adipisci ducimus facilis a. Aspernatur facere quaerat iusto commodi quidem!
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
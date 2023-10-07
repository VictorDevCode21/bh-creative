import Image from "next/image"
import { SiGmail, SiJavascript, SiMysql, SiNodedotjs, SiAdobeillustrator, SiAdobepremierepro, SiCanva, SiFlutter, SiTypescript, SiPrisma, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiGit, SiGithub, SiMongodb, SiJest, SiCypress, SiAdobephotoshop } from 'react-icons/si'

function About() {
    return (
        <section id="about" className="w-full h-screen md:flex xs:hidden">
            <div className="w-1/2 h-full flex items-center justify-center md:pl-28">
                <Image src="/images/about-photo.jpg" alt="About Us Image" width={1080} height={720} />
            </div>
            <div className="w-1/2 h-full flex flex-col  justify-center">
                <div className="pb-0 md:pl-20 md:pr-20">
                    <h2 className=" text-3xl text-cyan-400 font-bold">About Us</h2>
                    <p className="pt-2 ">
                        We are a company dedicated to marketing and web and mobile development, with the aim of helping
                        businesses grow and have a better online presence. We provide everything you need
                        to take your business to the next level.
                    </p>
                    <div className="pt-4 flex w-full items-center">
                        <h3>Websites</h3>
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
                        <h3>Graphic Design</h3>
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
                        <h3>Community Manager</h3>
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
                        <h3>Video Editing</h3>
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
                        <h3>Copywriting</h3>
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
                        <h3>Mobile Applications</h3>
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

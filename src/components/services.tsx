function Services() {
    return (
        <section id="services" className="w-full lg:h-screen xs:h-full">
            <div className="w-full flex items-center xs:justify-start md:justify-start xs:pt-28 xs:pb-5 md:pt-4 md:pb-0 md:pl-40 lg:pt-0">
                <h2 className="font-bold text-3xl text-cyan-400 lg:pt-20 xs:pl-4 md:pl-0">
                    Our Services
                </h2>
            </div>
            <div className="w-full flex md:flex-row xs:flex-col items-end justify-center md:pt-6 md:pr-0 lg:pl-36 lg:pr-40">
                <div className="lg:w-1/2 md:w-60 xs:pl-4 xs:pr-4 md:pl-0 lg:pl-8 ">
                    <div className="w-full lg:h-40 xs:h-full border-t-2 border-gray-500">
                        <h3 className="text-lg font-bold xs:pb-4 xs:pt-4 md:pb-0 lg:pt-2 lg:pb-4">
                            Web Development
                        </h3>
                        <p className="xs:text-sm lg:text-base">
                            At BH Creative, we specialize in creating exceptional web experiences. Our web development services combine cutting-edge technologies with aesthetic design to ensure functionality and online visibility.
                        </p>
                        <div>
                            <p className="lg:text-base lg:pt-4 xs:font-medium xs:pt-2">
                                Types of websites we offer:
                            </p>
                            <ul className="list-disc pl-6 lg:text-base lg:pt-2 xs:pt-4">
                                <li className="pt-0">
                                    Static Websites: Establish a strong online presence with essential information and contact forms.
                                </li>
                                <li className="pt-2">
                                    Dynamic Websites: Enhance user engagement with dynamic web solutions.
                                </li>
                                <li className="pt-2">
                                    Custom E-Commerce: Boost online sales with optimized e-commerce platforms for a superior shopping experience.
                                </li>
                            </ul>
                            <p className="lg:text-base lg:pt-2 xs:pt-4">
                                Additionally, our commitment to SEO ensures top Google search rankings, making it easier for your audience to find you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-60 xs:pl-4 xs:pr-4 md:pl-4 lg:pt-0 lg:pb-0 lg:pl-8 xs:pt-10 ">
                    <div className="w-full lg:h-40 xs:h-full border-t-2 border-gray-500 ">
                        <h3 className="text-lg font-bold xs:pb-4 xs:pt-4 md:pb-0 lg:pt-2 lg:pb-4">
                            Business Automation and Social Media Optimization
                        </h3>
                        <div>
                            <p className="lg:text-base lg:pt-0 xs:pt-2 ">
                                BH Creative specializes in crafting customized digital marketing strategies to achieve your unique goals. Whether it&apos;s increasing brand awareness, driving website traffic, or improving conversions, we&apos;ve got you covered.
                            </p>
                            <p className="lg:text-base lg:pt-2 xs:pt-6 ">
                                Our team excels in managing and optimizing social media profiles on platforms like Facebook, Twitter, Instagram, LinkedIn, and TikTok.
                            </p>
                            <p className="lg:text-base lg:pt-2 xs:pt-6 ">
                                We create captivating content, run targeted advertising campaigns, and continuously monitor performance to ensure your social media presence stands out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services

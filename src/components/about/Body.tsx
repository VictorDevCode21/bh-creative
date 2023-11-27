import ImagesAbout from "./Images"
import Socialmedia from "../projects/Socialmedia"
import X from "./X"
import Tiktok from "./Tiktok"

function BodyAbout() {

    return (
        <section className="w-full h-full">
            <div className="flex xs:flex-col lg:flex-row lg:pt-28">
                <div className="w-1/2 flex justify-end">
                    <ImagesAbout />
                </div>
                <div className="w-1/2 flex flex-col justify-start text-light lg:pr-48 lg:pl-10">
                    <h2 className="dark:text-light text-dark font-semibold xs:text-xl lg:text-2xl">BH Creative, your best solution!</h2>
                    <p className="text-dark dark:text-light lg:pt-4">
                        In 2023, our journey began, spurred by a mission to address a critical need: a dearth of bespoke web
                        solutions for businesses hungry to expand their digital footprint, boost sales, and streamline operations.
                        Fueled by the escalating demand for marketing expertise and the undeniable value it brings, we evolved to
                        offer more. Today, we&apos;re not just creators of websites; we&apos;re specialists in digital marketing.
                        Our seasoned team, each an expert in their domain, is committed to providing services meticulously
                        crafted to meet the unique requirements of every enterprise.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center lg:pt-40">
                <p className="text-dark dark:text-light font-semibold xs:text-xl lg:text-4xl">Social Media</p>
            </div>
            <div className="flex items-center justify-center lg:pt-20 lg:pb-10">
                <h3 className="text-dark dark:text-light font-semibold xs:text-xl lg:text-3xl">Instagram</h3>
            </div>
            <div className="flex justify-between xs:flex-col lg:flex-row lg:pl-20 lg:pr-20 lg:pt-10">
                <div>
                    <Socialmedia url="https://www.instagram.com/p/Cx_Zq9guLtt/?img_index=1" />
                </div>
                <div>
                    <Socialmedia url="https://www.instagram.com/p/Cx8xPpiux3g/?img_index=1" />
                </div>
                <div>
                    <Socialmedia url="https://www.instagram.com/p/Cxt9dzYsOHX/?img_index=1" />
                </div>
            </div>
            <div className="flex items-center justify-center lg:pt-20 lg:pb-10">
                <h3 className="text-dark dark:text-light font-semibold xs:text-xl lg:text-3xl">Twitter/X</h3>
            </div>
            <div className="flex justify-between xs:flex-col lg:flex-row lg:pl-20 lg:pr-20 lg:pt-10">
                <div>
                    <X url="1710029340367355919"/>
                </div>
                <div>
                    <X url="1710392483321110616"/>
                </div>
                <div>
                    <X url="1709666197481161117"/>
                </div>
            </div>
            <div className="flex items-center justify-center lg:pt-20 lg:pb-10">
                <h3 className="text-dark dark:text-light font-semibold xs:text-xl lg:text-3xl">Tiktok</h3>
            </div>
            <div className="flex justify-between xs:flex-col lg:flex-row lg:pl-20 lg:pr-20 lg:pt-10">
                <div>
                    <Tiktok url="https://www.tiktok.com/@bhcreativeusa/video/7287648899358100741"/>
                </div>
                <div>
                    <Tiktok url="https://www.tiktok.com/@bhcreativeusa/video/7287377865752972549"/>
                </div>
                <div>
                    <Tiktok url="https://www.tiktok.com/@bhcreativeusa/video/7287350292482493702"/>
                </div>
            </div>
        </section>
    )
}

export default BodyAbout
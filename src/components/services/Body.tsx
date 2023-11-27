import Image from "next/image"
import WebsiteServices from "./Website-services"



function BodyServices() {
    return (
        <section className="w-full h-full dark:text-white ">
            <div className="lg:pl-20 lg:pt-20 ">
                <h2 className="font-semibold text-cyan-400 xs:text-center xs:text-xl lg:text-left lg:text-3xl">Web development for business</h2>
            </div>
            <div className="w-full h-full">
                <WebsiteServices title1="STATIC WEBSITE" title2="DYNAMIC WEBSITE" title3="ECOMMERCE" plan1="BASIC" plan2="INTERMEDIATE" plan3="PREMIUM" info1="Static website for business" info2="Max of 3 pages included" info3="Streamlined, professional design" info4="Mobile-friendly for a wider reach" info5="Hassle-free domain and hosting setup" info6="Swift deployment for a quick online debut" info7="Dynamic website for business" info8="All of the basic plan" info9="Easy-to-use interface for seamless updates" info10="Enhanced product management capabilities" info11="Database integration for dynamic content" info12="Stay relevant with effortless content modifications" info13="Ecommerce website for business" info14="All of the intermediate plan" info15="Streamlined, secure online payments for increased sales" info16="Harness the power of PIM and DAM for optimal product management" info17="Optimized SEO for Google" info18="Elevate efficiency and organization for a competitive edge" price1="From 799$" price2="From 1499$" price3="From 2999$" />
            </div>
            <div className="lg:pl-20 lg:pt-20  xs:pt-10 ">
                <h2 className="font-semibold text-cyan-400 xs:text-center xs:text-xl lg:text-left lg:text-3xl">Automated Social Media Growth</h2>
            </div>
            <div className="w-full h-full">
                <WebsiteServices title1="ENTREPENEUR PLAN" title2="GROWTH SOCIAL MEDIA" title3="ADVANCED SOCIAL MEDIA GROWTH" plan1="BASIC" plan2="INTERMEDIATE" plan3="PREMIUM" info1="Management of one social media platform (Facebook, Instagram, Twitter, or LinkedIn) " info2="Creation of 12 monthly posts with graphic design and copywriting" info3="Interaction with the audience and comment management " info4="Monthly metrics and indicators report" info5="create quality content to attract and retain their target audience" info6="ideal for small businesses or entrepreneurs" info7="Management of two social media platforms (Facebook, Instagram, Twitter, or LinkedIn)" info8="Digital marketing strategy and content plan" info9="Creation of 20 monthly posts with graphic design and copywriting" info10="Interaction with the audience and comment management" info11="Monthly metrics and indicators report" info12="ideal for medium-sized businesses or companies looking to expand their reach on two social media platforms and create valuable content" info13="Management of three or more social media platforms (Facebook, Instagram, Twitter, LinkedIn)" info14="Creation of 25 or more monthly posts with graphic design, copywriting, video, and audio editing" info15="Interaction with the audience and comment management" info16="Monthly metrics and indicators report" info17="Paid advertising campaigns and SEO optimization" info18="ideal for large enterprises or brands aiming to dominate the market on multiple social media platforms" price1="From 499$" price2="From 999$" price3="From 1999$" />
            </div>
        </section>
    )
}

export default BodyServices
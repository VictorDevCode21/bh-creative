


interface WebsiteProps {
    title1: string;
    title2: string;
    title3: string;
    plan1: string;
    plan2: string;
    plan3: string;
    info1: string;
    info2: string;
    info3: string;
    info4: string;
    info5: string;
    info6: string;
    info7: string;
    info8: string;
    info9: string;
    info10: string;
    info11: string;
    info12: string;
    info13: string;
    info14: string;
    info15: string;
    info16: string;
    info17: string;
    info18: string;
    price1: string;
    price2: string;
    price3: string;
}


function WebsiteServices({title1, title2, title3, plan1, plan2, plan3, info1, info2, info3, info4, info5, info6, info7, info8, info9, info10, info11, info12, info13, info14, info15, info16, info17, info18, price1, price2, price3}: WebsiteProps) {
    return (
        <div className='w-full h-full flex xs:flex-col xs:justify-center xs:items-center lg:justify-between lg:flex-row  '>
            <div className="w-1/3 flex flex-col justify-center items-center lg:pl-20 lg:pr-20">
                <div className='lg:pb-4 lg:pt-4 xs:pt-6 xs:pb-6'>
                    <h3 className='font-semibold text-center lg:text-2xl'>{title1}</h3>
                </div>
                <div className='lg:w-full xs:w-60 bg-cyan-400 rounded-3xl '>
                    <div className='lg:pl-4 lg:pr-4 xs:pl-4 xs:pr-4'>
                        <div className='pb-4 pt-4 w-full text-center '>
                            <p className='lg:text-xl'>{plan1}</p>
                        </div>
                        <div className='pb-4 text-center '>
                            <h4>{info1}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info2}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info3}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info4}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info5}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info6}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <p className="font-bold text-xl">{price1}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center lg:pl-20 lg:pr-20">
                <div className='lg:pb-4 lg:pt-16 xs:pt-6 xs:pb-6'>
                    <h3 className='font-semibold text-center lg:text-2xl'>{title2}</h3>
                </div>
                <div className='lg:w-full xs:w-60 bg-cyan-400 rounded-3xl'>
                    <div className='lg:pl-4 lg:pr-4 xs:pl-4 xs:pr-4'>
                        <div className='pb-4 pt-4 w-full text-center '>
                            <p className='lg:text-xl'>{plan2}</p>
                        </div>
                        <div className='pb-4 text-center '>
                            <h4>{info7}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info8}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info9}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info10}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info11}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info12}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <p className="font-bold text-xl">{price2}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center lg:pl-20 lg:pr-20 lg:pb-0 xs:pb-10">
                <div className='lg:pb-4 lg:pt-10 text-center xs:pt-6 xs:pb-6'>
                    <h3 className='font-semibold lg:text-2xl'>{title3}</h3>
                </div>
                <div className='lg:w-full xs:w-60 bg-cyan-400 rounded-3xl'>
                    <div className='lg:pl-4 lg:pr-4 xs:pl-4 xs:pr-4'>
                        <div className='pb-4 pt-4 w-full text-center '>
                            <p className='lg:text-xl'>{plan3}</p>
                        </div>
                        <div className='pb-4 text-center '>
                            <h4>{info13}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info14}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info15}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info16}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info17}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <h4>{info18}</h4>
                        </div>
                        <div className='pb-4 text-center border-t-2 border-gray w-full'>
                            <p className="font-bold text-xl">{price3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebsiteServices
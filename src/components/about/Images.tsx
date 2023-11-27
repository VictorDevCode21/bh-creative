'use client'
import { useThemeSwitch } from '../../components/Hooks/useThemeSwitch';
import Image from 'next/image'

function ImagesAbout() {
    const [mode] = useThemeSwitch();
    return (
        <div>
            <Image className='w-96 h-full' src="/images/marketing.jpg" alt='marketing' width={1080} height={1080}/>
        </div>
    )
}

export default ImagesAbout
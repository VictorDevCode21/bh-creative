'use client'
import { InstagramEmbed } from 'react-social-media-embed'



function Socialmedia({ url }: { url: string }) {
    return (
        <div className='shadow-md lg:shadow-gray lg:dark:shadow-light' style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url={url} width={328} height={460}/>
        </div>
    )
}

export default Socialmedia
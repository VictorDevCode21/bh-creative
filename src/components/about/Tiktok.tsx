'use client'
import { TikTokEmbed } from "react-social-media-embed"


function Tiktok({ url }: { url: string }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TikTokEmbed placeholderDisabled url={url} width={325} />
        </div>
    )
}

export default Tiktok
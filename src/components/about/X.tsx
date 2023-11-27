'use client'
import {
    TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton,
    TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed,
    TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed,
    TwitterOnAirButton
} from 'react-twitter-embed';



function X({ url }: { url: string }) {
    return (
        <div className='w-1/3 '>
            <TwitterTweetEmbed
                tweetId={url}
            />
        </div>
    )
}

export default X
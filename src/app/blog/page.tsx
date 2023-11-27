import HomeCoverSection from "@/components/blog/HomeCoverSection"
import FeaturedPosts from "@/components/blog/FeaturedPosts"
import RecentPosts from "@/components/blog/RecentPosts"
import { allBlogs } from "contentlayer/generated"


function Blogs() {
    return (
        <main className="flex flex-col items-center justify-center">
            <HomeCoverSection blogs={allBlogs} />
            <FeaturedPosts blogs={allBlogs} />
            <RecentPosts blogs={allBlogs} />
        </main>
    )
}

export default Blogs
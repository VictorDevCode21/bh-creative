import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: string[]): string => classNames.filter(Boolean).join(" ");

interface Blog {
    title: string;
    description: string;
    publishedAt: string;
    image: {
        filePath: string;
        blurhashDataUrl: string;
    };
    tags: string[]; // Agregamos el campo 'tags'
    url: string;   // Agregamos el campo 'url'
}

export const sortBlogs = (blogs: Blog[]): Blog[] => {
    return blogs
        .slice()
        .sort((a, b) =>
            compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
        );
};
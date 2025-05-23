import BlogPage from "./Blog";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog page description',
    keywords: ['Blog', 'Next.js']
}

type Props = {}

export default function Blog({}: Props) {
    return (
        <BlogPage />
    )
}
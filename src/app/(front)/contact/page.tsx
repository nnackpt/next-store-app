import ContactPage from "./Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact page description',
    keywords: ['Contact', 'Next.js']
}

type Props = {}

export default function Contact({}: Props) {
    return (
        <ContactPage />
    )
}
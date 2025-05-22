import { Metadata } from 'next';
import HomePage from './Home';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page description',
    keywords: ['Home', 'Next.js']
}

type Props = {}

export default function Home({}: Props) {
    return (
        <HomePage />
    )
}
import { Metadata } from "next";
import ForgotPassPage from "./Forgotpass";

export const metadata: Metadata = {
    title: 'Forgot Password',
    description: 'Forgot Password page and description',
    keywords: ['Forgot Password', 'Next.js']
}

type Props = {}

export default function ForgotPass({}: Props) {
    return (
        <ForgotPassPage />
    )
}
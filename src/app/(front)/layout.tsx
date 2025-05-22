import Footer from "../components/front/footer/Footer"
import Header from "../components/front/header/Header"

export default function FrontLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
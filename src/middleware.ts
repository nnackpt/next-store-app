import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    try {
            const isPublicPage = request.nextUrl.pathname === '/login' ||
                                 request.nextUrl.pathname === '/register' ||
                                 request.nextUrl.pathname === '/forgotpass' ||
                                 request.nextUrl.pathname === '/reset-password' ||
                                 request.nextUrl.pathname === '/maintenance' ||
                                 request.nextUrl.pathname === '/coming-soon' 
            
            // const token = request.cookies.get('token')?.value
            const token = false

            console.log(token, isPublicPage)

            if (token && isPublicPage){
                return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
            }

            if (!token && !isPublicPage){
                return NextResponse.redirect(new URL('/login', request.nextUrl))
            }
    }
    catch(error) {
        console.error("Error: ", error)
        return NextResponse.error()
    }
}

export const config = {
    matcher: [
        "/login",
        "/register",
        "/forgotpass",
        "/reset-password",
        "/maintenance",
        "/coming-soon",
        //"/backend/:path*"
    ]
}
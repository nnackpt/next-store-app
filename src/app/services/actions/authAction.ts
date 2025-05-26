"use server"

import { cookies } from "next/headers"

type User = {
    username: string
    password: string
}

// Login function
async function login(data: User) {
    
    try {
        // API call to login
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/Authenticate/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            const data = await response.json()
            // save token in cookies
            cookies().set('token', data.token, {
                maxAge: 24 * 60 * 60,
            })

            return { success: true, data } 
        } else {
            const data = await response.json()
            return { success: false, error: data }
        }
    } catch (error) {
        console.log('An error occured during the login process: ', error)
        return { success: false, error }
    }

}

export { login }
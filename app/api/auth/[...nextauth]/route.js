import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"


const authOption = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET || 'AIzaSyCB5TdGg39DCc4n0TwmSnLSo5R6ZZzhKQ0' ,
    callbackUrl: process.env.NEXTAUTH_URL
}

const handler = NextAuth(authOption);
export {handler as GET, handler as POST};
import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { db } from "./db";
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy:'jwt'
    },
    pages:{
        signIn: '/signin'
    },
    providers:[
       Credentials({
        name: "Credentials",
        credentials:{
            email: {label: "email", type: "email", placeholder: "email@example.com"},
            password: {label: "Password", type: "Password"}
        },
        async authorize(credentials, req) {
            if (!credentials?.email || !credentials?.password) {
                return null;
            }
            const existingUser = await db.user.findUnique({
                where: { email: credentials?.email }
            });
            if (!existingUser) {
                return null;
            }
            const passwordMatch = await compare(credentials.password, existingUser.password);
            if (!passwordMatch) {
                return null;
            }
            return {
                id: `${existingUser.id}`,
                username: existingUser.username,
                email: existingUser.email,
                department: existingUser.department
            }
        }
       })
    ],
    callbacks:{
        async jwt({token, user}){
            console.log(token, user)
            if(user){
                return {
                    ...token,
                    username: user.username
                }
            }
            return token;
        },
        async session({session, token}){
            return {
                ...session,
                user:{
                    ...session.user,
                    username: token.username
                }
            }
        },

    }
}
import { NextRequest,NextResponse } from "next/server";
import {db} from "@/lib/db";
import {hash} from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
    username: z.string().min(1,'Username required'),
    email: z.string().min(1, 'Email is required'),
    department: z.string().min(2, "Department is required"),
    password: z.string().min(1, "Password is required").min(8, "Password must contain 8 characters"),
    role: z.string().min(1).optional().default("Student")
});

export async function POST(req:NextRequest) {
    try{
        const body = await req.json();
        const {email, username, department, role, password} = userSchema.parse (body);
        
        const existingUser = await db.user.findUnique({
            where: {email: email}
        });
        if(existingUser){
            return NextResponse.json({user: null, message:"User with email already exists."},{status:409})
        }
        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data:{
                email,
                username,
                department,
                role,
                password: hashedPassword
            }
        })    
        return NextResponse.json({user: newUser, message:"User created successfully."}, {status: 201});
    } catch(error){
        return NextResponse.json(error);
    }
}

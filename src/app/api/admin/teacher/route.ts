import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try{
        const body = await req.json();
        const {id, email, name, department,mobileNo} = body;
        const newTeacher = await db.teacherDetail.create({
            data:{
                id,
                email,
                name,
                department,
                mobileNo
            }
        })
        return NextResponse.json({teacher:newTeacher, message:"Teacher added successfully"});
    }catch(error){
        return NextResponse.json(error);
    }
}
"use server";
import {z} from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export type State = {
    errors?:{
        title?: string[];
    },
    message?: string | null;
}

const createBoard = z.object({
    title: z.string().min(3,{message:"Minimum 3 letters are required"}),
});

export async function create(previousState:State,formData:FormData) {
   const validatedFields = createBoard.safeParse({title: formData.get("title"),
});
if(!validatedFields.success){
    return {
        error: validatedFields.error.flatten().fieldErrors,
        message: "Missing fields."
    }
}
    const {title} = validatedFields.data;
    try{
        await db.board.create({
            data:{
                title,
            }
        });    
    }
    catch(error){
        return{
            message:"Database error"
        }
    }

    revalidatePath("/organization/org_2eN84CUB8PFCtcoUqMglNGsMENt")
    redirect("/organization/org_2eN84CUB8PFCtcoUqMglNGsMENt");
}
"use client";

import { create } from "@/actions/create-Board";
import { Button } from "@/components/ui/button";
import { stat } from "fs";
import { useFormState } from "react-dom";
import { string } from "zod";

export const Form = () =>{
    const initialState = {message: null, error:{}};
    const [state, dispatch] = useFormState(create, initialState);
    return (
      <form action={dispatch}>
        <div className="flex flex-col space-y-2">
        <input 
        id="title"
        name="title"
        required
        placeholder="Enter a board name"
        className="border-black border p-1"
        />
        {state?.error?.title?(
            <div>
                    {state.error.title.map((error: string)=>(
                        <p key={error} className="text-rose-500">
                            {error}
                        </p>
                    ))}
            </div>
        ): null}
        </div>
        <Button variant={"destructive"} type="submit">Submit</Button>
      </form>
    )
}

function userFormState(create: (formData: FormData) => Promise<void>, initialState: { message: null; error: {}; }): [any, any] {
    throw new Error("Function not implemented.");
}

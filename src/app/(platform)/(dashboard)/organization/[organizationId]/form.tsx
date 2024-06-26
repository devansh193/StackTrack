"use client";

import { create } from "@/actions/create-board";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";
import { useFormState } from "react-dom";

export const Form = () =>{
    const initialState = {message: null, error:{}};
    const [state, dispatch] = useFormState(create, initialState);
    return (
      <form action={dispatch}>
        <div className="flex flex-col space-y-2 py-2">
       <FormInput errors={state?.error}/>
        </div>
        <FormButton/>
      </form>
    )
}

function userFormState(create: (formData: FormData) => Promise<void>, initialState: { message: null; error: {}; }): [any, any] {
    throw new Error("Function not implemented.");
}

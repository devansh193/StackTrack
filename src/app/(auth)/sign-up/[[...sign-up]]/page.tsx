import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col mt-20">
    <SignUp />
    </div>
    </div>
  ); 
}
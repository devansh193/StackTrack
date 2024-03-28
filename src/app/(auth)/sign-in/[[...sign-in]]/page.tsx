import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
  <div className="flex items-center justify-center flex-col">
    <div className="flex items-center justify-center flex-col pt-20">
  <SignIn />
  </div>
  </div>
  );
}
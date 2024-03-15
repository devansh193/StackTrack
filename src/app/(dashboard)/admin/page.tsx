import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async ()=>{
    const session = await getServerSession(authOptions);
    console.log(session);
    return <div className="pt-20">Welcome to admin {session?.user?.username}</div>
};
export default page;
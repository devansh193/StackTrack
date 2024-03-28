import Navbar from "@/components/Navbar"
import { DraftModeProvider } from "next/dist/server/async-storage/draft-mode-provider"

const DashboardLayout = ({children}:{
    children: React.ReactNode
})=>{
    return (
        <div className="h-full">
            <Navbar/> 
            {children}
        </div>
    )
}
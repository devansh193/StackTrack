"use client";
import { usePathname } from "next/navigation";
import { useMobileSidebar } from "../../../../../hooks/use-mobile-sidebar";import { useEffect, useState } from "react";

export const MobileSidebar =()=>{
    const pathname = usePathname();
    const [isMounted, setIsMounter] = useState(false);


    const onOpen = useMobileSidebar((state)=>state.onOpen)
    const onClose = useMobileSidebar((state)=>state.onClose)
    const isOpen = useMobileSidebar((state)=>state.isOpen)

    useEffect(()=>{
        setIsMounter(true);
    },[])

    useEffect(()=>{
        onClose();
    },[pathname, onClose])

    if(!isMounted){
        return null;
    }


    return(
        <div>
            sidebar mobile
        </div>
    );
};
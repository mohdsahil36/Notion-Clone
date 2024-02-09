"use client"

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { MenuIcon } from "lucide-react";
import { Title } from "./Title";

interface NavbarProps{
    isCollapsed:boolean;
    onResetWidth:()=>void;
}

export default function Navbar({
    isCollapsed,onResetWidth
}:NavbarProps){
    const params=useParams();
    const document=useQuery(api.documents.getById,{
        documentId:params.documentId as Id<"documents">,
    });
    if(document===undefined){
        return <p>Loading..</p>
    }
    if(document===null){
        return null;
    }
    return(
        <>
            <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
                {isCollapsed && (
                    <MenuIcon
                    role="button"
                    className="h-6 w-6 text-muted-foreground"
                    onClick={onResetWidth}
                    />
                )}
                <div className="flex items-center justify-between w-full">
                    <Title initialData={document}/>
                </div>
            </nav>
        </>    
    )
}
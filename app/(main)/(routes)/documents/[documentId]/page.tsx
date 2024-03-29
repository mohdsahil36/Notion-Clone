"use client"

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/app/(main)/_components/Toolbar";

interface DocumentIdProps{
    params:{
        documentId:Id<"documents">
    }
}

export default function DocumentIdPage({
    params
}:DocumentIdProps){
    const document=useQuery(api.documents.getById,{
        documentId:params.documentId
    });
    
    if(document===undefined){
        return(
            <div>
                Loading...
            </div>
        )
    }

    if(document===null){
        return(
            <div>
                Not found
            </div>
        )
    }

    return(
        <div className="pb-40">
            <div className="h-[35vh] "></div>
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar initialData={document}/>
            </div>
        </div>
    )
}
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/db";
import Club from "@/models/Club";

export async function GET(request: NextRequest, {params}:{params: {id: string}}){
    try{
        await connectDB();
        const club = await Club.findById(params.id);
        
        if(!club){
            return NextResponse.json({message:"club not found"}, {status:404});
        
        }
        
        return NextResponse.json(club, {status: 200})
        
    }
    catch(e){
        console.log(e);
        return NextResponse.json({ message: "Error fetching club" }, { status: 500 })
    }

}


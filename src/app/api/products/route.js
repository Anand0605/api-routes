import { connectionSrt } from "@/lib/db"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET=async()=>{
    await mongoose.connect(connectionSrt)
    return NextResponse.json({result:true})
}
// import { NextResponse } from "next/server"

import { user } from "@/utils/db"
import { NextResponse } from "next/server";

// export function GET(request){
//     return NextResponse.json({name:'Anand', age:18,city:'Noida'})
// }

//  export const GET = (request)=>{
//     return NextResponse.json({name:'Jax',age:16,Noida:"Newyork"},{status:200})

// }

export const GET = ()=>{
    const data = user;
    return NextResponse.json(data,{status:200})
}




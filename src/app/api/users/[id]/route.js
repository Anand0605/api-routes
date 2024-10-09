import { user } from "@/utils/db"
import { NextResponse } from "next/server";

// export function GET(request){
//     return NextResponse.json({name:'Anand', age:18,city:'Noida'})
// }

//  export const GET = (request)=>{
//     return NextResponse.json({name:'Jax',age:16,Noida:"Newyork"},{status:200})

// }

export const GET = (request,content)=>{
    // console.log(content.params.id)
    // const data = user;
    const userData = user.filter((item)=>item.id == content.params.id) 
    return NextResponse.json(userData.length == 0 ? {result:"no data found", success: false}: {result:userData,result:true},{status:200})
}
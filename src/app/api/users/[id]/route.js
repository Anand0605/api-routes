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
    return NextResponse.json(userData.length == 0 ? {result:"no data found", success: false}: {result:userData[0],success:true},{status:200})
}

export const PUT = async(request,content)=>{
    
    let payload = await request.json();
    payload.id = content.params.id;
    // let userId = content.params.id;
    console.log(payload)
    // console.log(userId)
    if(!payload.id || !payload.age || !payload.email){
        return NextResponse.json({result:"data is not valid", success:false},{status:400})
    }
    return NextResponse.json({result:payload, success:true},{status:200})

}

export const DELETE =(request,content)=>{
let id = content.params.id
if(id){
    return NextResponse.json({result:"User Delete", success:true},{status:200})
}else{
    return NextResponse.json({result:"Internal error, please try after sometime",success:flase},{status:400})
}
}
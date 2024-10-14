import { NextResponse } from "next/server";
// Catche all api Route
export const GET=async(request, content)=>{

    const studentDetails = content.params.student;
    console.log(studentDetails)
    return NextResponse.json({result:studentDetails},{status:200})
}
'use client'

import { useEffect, useState } from "react"
import './../../../style.css'

const page = ({ params }) => {
    let id = params.userid
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    // console.log(id)

    useEffect(() => {
        getuserDetails()
    }, [])

    const getuserDetails = async () => {
        let data = await fetch("http://localhost:3000/api/users/"+id)
        data = await data.json();
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)

    }

    const updateUser=async()=>{
        let result = await fetch("http://localhost:3000/api/users/"+id,{
            method:"PUT",
            body:JSON.stringify({name,age,email})
        })
        result = await result.json();
        console.log(result)
        if(result.success){
            alert("data updated succesfull")
        }else{
            alert("please enter valid data")
        }
    }
    return (
        <div>
            <h1>update</h1>
            <input className="input-field" type="text" value={name} placeholder="enter input" onChange={(e) => setName(e.target.value)} />
            <input className="input-field" type="number" value={age} placeholder="enter number" onChange={(e) => setAge(e.target.value)} />
            <input className="input-field" type="text" value={email} placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            <button className="btn" onClick={updateUser}>update</button>
        </div>
    )
}

export default page

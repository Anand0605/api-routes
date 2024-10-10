'use client'
import { useState } from 'react'
import './../style.css'

const page = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const addUser=async()=>{
        // console.log(name,age,email)
        let data = await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });
       data = await data.json();
    //    console.log(data)
       if(data.success){
        alert("new user added")
       }else{
        alert("please try again data added")
       }
       console.log(data)
    }

  return (
    <div className="add-user">
      <h1>Add user</h1>
      <input type="text" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)} className="input-field"/>
      <input type="number" value={age}placeholder="enter age"onChange={(e)=>setAge(e.target.value)} className="input-field" />
      <input type="text" value={email} placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}className="input-field" />
      <button className="btn" onClick={addUser}>Add User</button>
    </div>
  )
}

export default page

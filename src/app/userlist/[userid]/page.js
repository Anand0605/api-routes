import React from 'react'

const getUser =async(id)=>{
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    return data.result
    }

const page = async({params}) => {
    // console.log(params)
    const user =await getUser(params.userid);
    // console.log(user)
  return (
    <div>
      <h1>user Details</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.age}</h1>
      <h1>{user.id}</h1>
    </div>
  )
}

export default page

import React from 'react'

const userList =async()=>{
let data = await fetch("https://dummyjson.com/users")
data = await data.json();
return data.users;
}
const page = async() => {

    let users = await userList();
    console.log(users)
  return (
    <div>
      <h1>user list</h1>
      {
        users.map((item)=>(
            <div>
                <h3>users name , lastName {item.firstName},{item.lastName}</h3>
                <p>{item.email}</p>
                </div>
        ))
      }
    </div>
  )
}

export default page

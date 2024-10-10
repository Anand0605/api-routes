import Link from 'next/link';


const getUser =async()=>{
let data = await fetch("http://localhost:3000/api/users")
return await data.json();
}

const page = async() => {

    const userList = await getUser();
    // console(userList)
  return (
    <div>
      <h1>user List</h1>
      {
        userList.map((item)=>(
            
            <Link href={`userlist/${item.id}`}>{item.name}</Link>
        ))
      }
    </div>
  )
}

export default page

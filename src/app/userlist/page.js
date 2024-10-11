import Link from 'next/link';
import './../style.css'
import Deleteuser from '@/utils/Deleteuser';


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
            
           <div className='user-item'>
             <Link href={`userlist/${item.id}`}>{item.name}</Link>
             <span><Link href={`userlist/${item.id}`}>Edit</Link></span>
             <Deleteuser id={item.id}/>
           </div>
        ))
      }
    </div>
  )
}

export default page

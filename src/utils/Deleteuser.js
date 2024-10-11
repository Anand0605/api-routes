'use client'

const Deleteuser = (props) => {
const userId = props.di
console.log(userId)

const deleteUser=async()=>{
let result = await fetch("http://localhost:3000/api/users/"+userId,{
    method:"delete"
})

result = await result.json();
if(result.success){
    alert("dalete successfully")
}
}
  return (
    <div>
      <button onClick={deleteUser}>Deleteuser</button>
    </div>
  )
}

export default Deleteuser


import { useState } from "react"

function Postapi()
{
    const [rollno,setRollno]=useState()
    const [name,setName]=useState()
    const [marks,setMarks]=useState()
    function submitform(e)
    {
        e.preventDefault()
        const data={rollno,name,marks}
        fetch("https://nodeproject-rrin.onrender.com/",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((data1)=>{
                console.log(data1)
            })
        })
    }
    return(
        <div>
            <form onSubmit={submitform}>
                <input type="number" placeholder="Enter Roll no" onChange={(e)=>setRollno(e.target.value)}></input><br></br>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
                <input type="number" placeholder="Enter Marks" onChange={(e)=>setMarks(e.target.value)}></input><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Postapi
import { useState } from "react"

function Deleteapi()
{
    const [rollno1,setRollno]=useState()
    function submitform()
    {
        const rollno=parseInt(rollno1);
        const data={rollno}
        fetch("https://nodeproject-rrin.onrender.com",{
            method:"DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"Application/json"
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
            <input type="number" placeholder="Enter Roll No" onChange={(e)=>setRollno(e.target.value)}></input><br></br>
            <button onClick={submitform}>Submit</button>
        </div>
    )
}
export default Deleteapi
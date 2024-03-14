import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

function Getapi()
{
    const [studentdata,setData]=useState([])
    useEffect(()=>{
        fetch("https://nodeproject-rrin.onrender.com").then((result)=>{
            result.json().then((data)=>{
                setData(data)
            })
        })
    },[])
    return(
        <div>
            <Table>
                <tbody>
                    <tr>
                        <td>Roll No</td>
                        <td>Name</td>
                        <td>Marks</td>
                    </tr>
                    {
                        studentdata.map((item)=>
                        <tr>
                            <td>{item.rollno}</td>
                            <td>{item.name}</td>
                            <td>{item.marks}</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Getapi
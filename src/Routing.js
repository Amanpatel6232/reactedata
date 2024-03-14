
import Getapi from "./Getapi"
import Postapi from "./Postapi"
import Putapi from "./Putapi"
import Deleteapi from "./Deleteapi"
import Header from "./Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Routing()
{
    return(
        <div>
            <BrowserRouter>
            <Header></Header>
            <Routes>
                {/* <Route path="/" element={<Getapi></Getapi>}></Route> */}
                <Route path="/" element={<Getapi></Getapi>}></Route>
                <Route path="/post" element={<Postapi></Postapi>}></Route>
                <Route path="/put" element={<Putapi></Putapi>}></Route>
                <Route path="/delete" element={<Deleteapi></Deleteapi>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing
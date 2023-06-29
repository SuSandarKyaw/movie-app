
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getUser, removeToken, removeUser } from "../utilis/cache";

export default function Home(){
    
    const [user,setUser]=useState();
    const navigate=useNavigate();
    
useEffect(()=>{
    const user=getUser();
    setUser(JSON.parse(user))
},[])

const handleLogout=()=>{
    removeToken();
    removeUser();
    navigate("/login")
}
    return (
        <div className="row bg-secondary p-3 m-2">
        <div className="col text-white d-flex justify-content-between">
        <NavLink to="/">
        <img src="https://i.pinimg.com/236x/7f/d4/82/7fd482a17a0a0c18fdf380d630d325ce.jpg"
        style={{height:"60px",width:"100px",borderRadius:"20px",cursor:"pointer"}}/>
        </NavLink>
        <div className="d-flex gap-5 p-2">
            <span>{user?.email}</span>
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
         <NavLink to="/favorites" style={{textDecoration:"none"}} 
         className={({isActive})=>
           isActive ? "bg-danger p-2 rounded" :" " 
         }>
         <h5 style={{cursor:"pointer", color:"white"}}>Favorites</h5>
         </NavLink>
        
      </div>
      </div>

    </div>
    )
}
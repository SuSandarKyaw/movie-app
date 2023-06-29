import { Outlet, useNavigate } from "react-router";
import Home from "../component/NavBarLayout";
import { useEffect } from "react";
import { getToken } from "../utilis/cache";

export default function DefaultLayout(){
   
    const navigate =useNavigate();
    const check =async()=>{
        const token=getToken();
        if(!token){
            navigate('/login')
        }
    }
    useEffect(()=>{
       check()
        
    },[])

    return(
        <div className="container-fluid bg-dark" style={{minHeight:"100vh"}} >
        <Home />
        <Outlet/>
        </div>
      
    )
}
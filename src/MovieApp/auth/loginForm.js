import { useRef, useState } from "react"
import { ApiCall } from "../../services/ApiService";
import { setToken, setUser } from "../../utilis/cache";
import { useNavigate } from "react-router";

export default function LogInForm(){
    const navigate =useNavigate();
    const emailRef =useRef();
    const passwordRef =useRef();
    const [isLogIn, setIsLoogIn]=useState(true);
    const handleSebmit =async (e)=>{
        e.preventDefault();
     if(emailRef.current.value && passwordRef.current.value){
        try {
            const endpoint= isLogIn ? 'login' : 'register';
        const res= await ApiCall(`http://localhost:3000/${endpoint}`,"post",{
            email : emailRef.current.value,
            password : passwordRef.current.value
        })
        setToken(res.accessToken);
         setUser(JSON.stringify(res.user));// to string

        navigate('/')
        } catch (error) {
            console.log(error);
        }
     }
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
               <div className="card col-5">
                <div className="card-header">
                  <h1>
                    {
                        isLogIn ? "Log In" : "Register"
                    }
                  </h1>
                </div>
                <div className="card-body">
                <form onSubmit={handleSebmit}>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" ref={emailRef}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password"className="form-control" ref={passwordRef}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div className="card-footer mt-2 text-primary" style={{cursor:"pointer" , textDecoration:"underline"}} onClick={()=>setIsLoogIn(!isLogIn)}>
 {
    isLogIn ? "Not Register Yet" : "Already Exist?"
 }
</div>
                </div>
               </div>
            </div>
        </div>
    )
}
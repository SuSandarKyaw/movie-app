import axios from "axios";
import { useNavigate } from "react-router";
import { ApiCall } from "../services/ApiService";

export default function MovieCard({movie}){
   
  const navigate=useNavigate();
  const handleSave= async()=>{
   await ApiCall('http://localhost:3000/favorites',"post",movie)
   navigate("/favorites")
  }
   return(
<div className="card col-3" >
    <img src={movie.Poster} style={{height:"200px"}}
     className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{movie.Title} ({movie.Year})</h5>
      <button className="btn btn-warning" onClick={handleSave}>Add Favorites</button>
    </div>
  </div>
  
   )
    
}
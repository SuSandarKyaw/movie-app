import axios from "axios";
import { ApiCall } from "../services/ApiService";

export default function FavoriteMovieCard({movie,setData}){
  const loadData= async()=>{
    const tempData = await ApiCall('http://localhost:3000/favorites',"get")
    setData(tempData);
  }
    const handleDelete= async(id)=>{
        await ApiCall(`http://localhost:3000/favorites/${id}`,'delete')
        loadData();
       }
      
       const handleUpdate= async (id)=>{
        const data ={     ...movie, Title:"Su Sandar Kyaw"}
      //  await axios.put(`http://localhost:3000/favorites/${id}`,{
      //       ...movie, Title:"Su Sandar Kyaw"
            await ApiCall(`http://localhost:3000/favorites/${id}`,"put",data)
       loadData();
        }
       
        return(
     <div className="card col-3" >
         <img src={movie.Poster} style={{height:"200px"}}
          className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">{movie.Title} ({movie.Year})</h5>
           <button className="btn btn-warning" onClick={()=>handleUpdate(movie.id)}>Edit</button>

           <button className="btn btn-danger" onClick={()=>handleDelete(movie.id)}>Remove</button>
         </div>
       </div>
       
        )
}
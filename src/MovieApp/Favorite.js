import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "../component/NavBarLayout";
import FavoriteMovieCard from "./FavoriteMovieCard";
import { ApiCall } from "../services/ApiService";
export default function Favorite (){
  const [data,setData]= useState(null);
  const loadData = async ()=>{
    const tempData = await ApiCall("http://localhost:3000/favorites",'get')
    setData(tempData)
  }
    useEffect(()=>{
      loadData();
    },[])
    return (
  
     <div className="row d-flex gap-5 justify-content-evenly mt-5">
     {
      data ? (
        data?.map((movie,index)=>
         <FavoriteMovieCard key={index} movie={movie} setData={setData}/>
        )) : (<h1 className="text-white">Loading...</h1>)
     }
     {
        data?.length === 0 && <h1 className="text-white">No Movies</h1>
     }
    </div>
    
    )
}
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { ApiCall } from "../services/ApiService";
export default function MovieApp(){
 
  const [data,setData]= useState(null);
  const loadData= async()=>{
    axios.defaults.headers='something';
    axios.get("https://www.omdbapi.com/?s=NoteBook&apikey=263d22d8")
      .then(function (response) {
        if(response.data.Search){
          setData(response.data.Search);
        } else{
          setData([]);
        }
      })
           
  }
    useEffect(()=>{
      // axios.get("https://www.omdbapi.com/?s=NoteBook&apikey=263d22d8")
      // .then(function (response) {
      //       setData(response.data.Search);
      //   } 
      // )
    loadData();
    },[])

  const handleFilter = async (value)=>{
    axios.defaults.headers='something';
    if(value === ''){
      value="The Notebook"
    }
   await axios.get(`https://www.omdbapi.com/?s=${value}&apikey=263d22d8`)
    .then(function (response) {
        if(response.data.Search){

            setData(response.data.Search);
        } else {
            setData([])
        }
})
}
     
        return (
      
       
         <div className="row d-flex gap-5 justify-content-evenly mt-5">
          <div className="row  d-flex justify-content-end">
            <div className="col-5">
            <input className="form-control" placeholder="Search" onKeyDown={(e)=>{
            if(e.key=== 'Enter'){
                handleFilter(e.target.value);
            }
        }}/>
            </div>
         
          </div>
         {
          data ? (
            data?.map((movie,index)=>
             <MovieCard key={index} movie={movie}/>
            )) : (<h1 className="text-white">Loading...</h1>)
         }
         {
            data?.length === 0 && <h1 className="text-white">No Movies</h1>
         }
        </div>
       
        )

}
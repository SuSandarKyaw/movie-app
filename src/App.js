import { BrowserRouter,Routes, Route } from "react-router-dom";
import MovieApp from "./MovieApp";
import Favorite from "./MovieApp/Favorite";
import DefaultLayout from "./layouts/DefaultLayout";
import { useState } from "react";
import LogInForm from "./MovieApp/auth/loginForm";

function App() {
   
  return(
   <BrowserRouter>
     <Routes>
       <Route element={<DefaultLayout/>}>
       <Route path="/" element={<MovieApp/>}/>
       <Route path="/favorites" element={<Favorite/>}/>
       </Route>
       <Route path="/login" element={<LogInForm/>}/>
     </Routes>
   </BrowserRouter>
  )
}

export default App;

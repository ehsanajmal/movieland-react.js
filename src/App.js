import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

// e9f28259

const API_URL = 'http://www.omdbapi.com?apikey=e9f28259';

const App = () => {
    const [movies, setMovie] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        
        setMovie(data.Search)
        
    }
    
    useEffect(()=>{
        searchMovies('Spiderman')      
    }, [])
    return(
        <div className="app">
            <h1>MovieLand App</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt="Search" onClick={()=>searchMovies(searchTerm)} />
            </div>
            {
                movies?.length > 0
                ? (  <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie} />
                    ))}
                    </div>) :
                    (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )   
            }       
        </div>
    )
}
export default App;
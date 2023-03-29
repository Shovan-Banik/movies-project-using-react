import React, { useEffect, useState } from 'react';
import './Movie.css'
import SingleMovie from '../SingleMovie/SingleMovie';

const Movie = ({bookNow}) => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])
    return (
        <div className='movies'>
            {
                movies.map(movie=><SingleMovie
                movie={movie}
                key={movie.movieName}
                bookNow={bookNow}
                ></SingleMovie>)
            }
        </div>
    );
};

export default Movie;
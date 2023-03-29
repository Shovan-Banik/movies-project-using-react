import React from 'react';
import './SingleMovie.css'

const SingleMovie = ({movie,bookNow}) => {
    return (
        <div className='movie'>
            <img src={movie.poster} alt="" />
            <h3>Movie Name: {movie.movieName}</h3>
            <p>Description: {movie.description}</p>
            <p>Watch Time: {movie.watchTime}</p>
            <p><small>Rating: {movie.imdbRating}</small></p>
            <button onClick={()=>bookNow(movie.watchTime)}>Book Now</button>
        </div>
    );
};

export default SingleMovie;
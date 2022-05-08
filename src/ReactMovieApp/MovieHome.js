import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./movie.css"

const MovieHome = () => {
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async () => {
        const url = "https://www.omdbapi.com/?i=tt3896198&apikey=145ab3d6"
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson)
    }
    useEffect(() => {
        getMovieRequest()
    }, [])
    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>

            </div>
        </div>

    )
}

export default MovieHome
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import api from '../api/axiosConfig';
import styles from '../styles/home.module.css';
import {Link, useNavigate} from "react-router-dom";
import MovieCard from './MovieCard';

const Home = () => {
    const [movies, setMovies] =useState();
    const navigate = useNavigate();
    async function getMovies() {
        try {
            const response = await api.get("/movies");
            setMovies(response.data);
            console.log(response.data);
        }
        catch(err) {
            console.log(err);
        }
    }

    function playTrailer(imdbId) {
        navigate(`/reviews/${imdbId}`)
    }

    function review(imdbId) {
        navigate(`/reviews/${imdbId}#review`)
    }

    useEffect(() => {
        getMovies();
    },[])
    return (
        <Grid container spacing={2} justifyContent="center" className={styles.cardGrid}>
            {movies?.map(movie => {
                return <Grid item key={movie.imdbId} className={styles.cardContainer}>
                    <MovieCard movie={movie} playTrailer={playTrailer} review={review}/>
                </Grid>
            })}
        </Grid>
    )
}

export default Home
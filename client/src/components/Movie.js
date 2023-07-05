import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import api from '../api/axiosConfig';
import styles from '../styles/movie.module.css';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import ReviewForm from './ReviewForm';

const Movie = () => {
    let params = useParams();
    const imdbId = params.imdbId;
    var [movie, setMovie] = useState();
    var [isMovie, setIsMovie] = useState(false);
    var [reviews, setReviews] = useState([]);

    async function getMovieData() {
        try {
            const response = await api.get(`/movies/${imdbId}`);
            setMovie(response.data);
            setIsMovie(true);
            setReviews([...reviews, ...response.data.reviewIds]);
            console.log(response.data);
            console.log(reviews);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMovieData();
    },[])

    return (
        <div>
            {isMovie && <Container fluid className='d-flex justify-content-center flex-column' style={{width:"80%"}}>
                <Row className='d-flex mt-4'>
                    <h1 className={styles.title}>{movie.title}</h1>
                </Row>
                <Row className='d-flex'>
                    <img className={styles.poster + ' d-none d-lg-block'} src={movie.poster}></img>
                    <ReactPlayer className={styles.trailer} controls="true" playing={false} url={`${movie.trailerLink}`}/>
                </Row>
                <Row className='d-flex mt-2 p-0'>
                    <Stack direction="horizontal" gap={2} className='p-0'>
                        {movie.genres.map(genre => {
                            return <Badge className={styles.badges} bg="secondary">{genre}</Badge>
                        })}
                    </Stack>
                </Row>
                <Row className='d-flex mt-1 p-0'>
                    <p className={styles.releaseDate}>Released on {movie.releaseDate}</p>
                </Row>
                <hr></hr>
                <ReviewForm id="review" reviews={reviews} setReviews={setReviews} imdbId={movie.imdbId}/>
                {reviews.length > 0 && reviews.map(review => {
                    return <Row className='d-flex p-0 mt-1 flex-column'>
                            <p className={styles.review}>{review.body}</p>
                            <p className={styles.releaseDate}>{review.id.date.slice(0,10)}</p>
                    </Row>
                })}
            </Container>}
        </div>
    )
}

export default Movie
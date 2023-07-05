import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../styles/home.module.css';
import { Container } from 'react-bootstrap';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MovieCard = ({movie, playTrailer, review}) => {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={movie.poster} className={styles.cardPoster} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title className={styles.cardTitle}>{movie.title}</Card.Title>
        <Container className="d-flex justify-content-around p-0">
          <Button className={styles.cardButton} onClick={() => playTrailer(movie.imdbId)}><FontAwesomeIcon icon={faPlay} className={styles.playIcon}/>Trailer</Button>
          <Button className={styles.cardButton} onClick={() => review(movie.imdbId)}><FontAwesomeIcon icon={faStar} className={styles.reviewIcon}/>Review</Button>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
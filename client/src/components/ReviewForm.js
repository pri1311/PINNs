import React from 'react';
import {useEffect, useRef} from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../styles/movie.module.css';
import api from '../api/axiosConfig';

const ReviewForm = ({reviews, setReviews, imdbId}) => {
    const revText = useRef();
    const addReview = async (e) =>{
        e.preventDefault();
        const rev = revText.current;
        try
        {
            console.log(rev);
            const response = await api.post("/reviews",{body:rev.value,imdbId:imdbId});
            const updatedReviews = [...reviews, response.data];
            rev.value = "";
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
    }

    return (
        <Row className='d-flex mt-1 p-0 mb-3'>
            <Form className='d-flex mt-1 p-0 flex-column'>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label className={styles.reviewTitle + " h3"}>Reviews</Form.Label>
                    <Form.Control ref={revText} type="text" placeholder="write a review" className={styles.reviewInput} />
                    <Form.Text className={styles.releaseDate}>
                    Reviews are anonymous!
                    </Form.Text>
                </Form.Group>
                <Button onClick={addReview} className={styles.reviewButton} variant="primary" type="submit">
                    Post!
                </Button>
            </Form>
        </Row>
    )
}

export default ReviewForm
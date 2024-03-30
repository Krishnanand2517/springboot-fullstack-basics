import { useRef, useEffect } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [getMovieData, movieId]);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: rev.value }];
      setReviews(updatedReviews);

      rev.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt={movie?.title} />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    labelText="Write a Review"
                    revText={revText}
                    handleSubmit={addReview}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }

          {reviews?.map((review) => (
            <>
              <Row>
                <Col>{review.body}</Col>
              </Row>

              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovieReviews';
import Notiflix from 'notiflix';
import {
  StyledReviewsList,
  StyledReviewsItem,
  StyledReviewsErrorItem,
  StyledReviewsDate,
  StyledReviewsAuthor,
  StyledReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const { results } = await getMovieReviews(id);

        setReviewsInfo(results);
      } catch (error) {
        Notiflix.Notify.failure('Failed to load reviews');
      }
    }
    getReviews(id);
  }, [id]);

  return (
    <StyledReviewsList>
      {reviewsInfo.length > 0 ? (
        reviewsInfo.map(review => (
          <StyledReviewsItem key={review.id}>
            <StyledReviewsDate>{review.created_at}</StyledReviewsDate>
            <StyledReviewsAuthor>
              Author: {review.author_details.username}
            </StyledReviewsAuthor>
            <StyledReviewsText>{review.content}</StyledReviewsText>
          </StyledReviewsItem>
        ))
      ) : (
        <StyledReviewsErrorItem>
          We don't have any reviews for this movie. 😦
        </StyledReviewsErrorItem>
      )}
    </StyledReviewsList>
  );
};

export default Reviews;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovieReviews';

const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const { results } = await getMovieReviews(id);

        setReviewsInfo(results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews(id);
  }, [id]);

  return (
    <ul>
      {reviewsInfo.length > 0 ? (
        reviewsInfo.map(review => (
          <li key={review.id}>
            <p>{review.created_at}</p>
            <h4>Author: {review.author_details.username}</h4>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <li>We don't have any reviews for this movie. 😦</li>
      )}
    </ul>
  );
};

export default Reviews;

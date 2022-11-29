import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../MovieAdditionalInfo/Cast'));
const Reviews = lazy(() => import('../MovieAdditionalInfo/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

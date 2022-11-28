import { Routes, Route } from 'react-router-dom';
import { Container, Header, Logo, Link } from './App.styled';
import { ReactComponent as MovieIcon } from '../icons/movieIcon.svg';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './MovieAdditionalInfo/Cast';
import { Reviews } from './MovieAdditionalInfo/Reviews';

export const App = () => {
  return (
    <>
      <Header>
        <Logo>
          <MovieIcon />
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from '../App.styled';
import { ReactComponent as MovieIcon } from '../../icons/movieIcon.svg';

export const SharedLayout = () => {
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
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

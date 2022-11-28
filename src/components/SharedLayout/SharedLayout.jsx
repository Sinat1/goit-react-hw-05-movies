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
        <Outlet />
      </Container>
    </>
  );
};

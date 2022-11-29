import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledMoviesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledMovieItem = styled.li`
  text-align: center;
  border-radius: 2px;
  margin-bottom: 25px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledMovieImg = styled.img`
  width: 100%;
  height: 82%;
  object-fit: cover;
`;

export const StyledMovieTitle = styled.h4`
  font-style: normal;
  color: #000;
  margin-top: 15px;
  margin-bottom: 0;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  color: #1f1f1f;
`;

export const StyledInfo = styled.p`
  margin-top: 15px;
  margin-bottom: 10px;
`;

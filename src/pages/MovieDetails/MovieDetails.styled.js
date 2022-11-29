import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
`;

export const GoBackBtn = styled.button`
  padding: 8px 16px;
  height: 40px;
  width: 140px;
  border-radius: 2px;
  background-color: red;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin-top: 25px;
  margin-bottom: 25px;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 10px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: crimson;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const StyledMovieImg = styled.img`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 100%;
  height: 500px;
  margin-right: 100px;
  display: block;
`;

export const StyledMovieInfoWrapper = styled.div`
  max-width: 1000px;
`;

export const StyledMovieTitle = styled.h3`
  margin-top: 0;
  font-size: 30px;
`;

export const StyledMovieRating = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const StyledMovieOverViewTitle = styled.h4`
  font-size: 25px;
`;

export const StyledMovieOverView = styled.p`
  font-size: 16px;
`;

export const StyledMovieGenresTitle = styled.h5`
  font-size: 20px;
`;

export const StyledMovieGenres = styled.p`
  font-size: 16px;
`;

export const AdditionalInfoWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const AdditionalInfoTitle = styled.h4`
  font-size: 25px;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

export const AdditionalInfoItem = styled.li``;

export const AdditionalInfoLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;
  font-size: 20px;
  font-weight: 600;
`;

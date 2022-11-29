import styled from 'styled-components';

export const StyledReviewsList = styled.ul`
  margin-top: 50px;
  list-style: none;
  padding: 0;
`;

export const StyledReviewsItem = styled.li`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 2px;
  margin-bottom: 30px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const StyledReviewsErrorItem = styled.li`
  dispay: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 50px;
  margin-left: 30vw;
  margin-right: 40vw;
  text-align: center;
  border-radius: 2px;
  margin-top: 25px;
  padding-top: 30px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  font-size: 18px;
`;

export const StyledReviewsDate = styled.p`
  display: flex;
  font-size: 14px;
  font-style: italic;
  padding-left: 15px;
`;

export const StyledReviewsAuthor = styled.h4`
  display: flex;
  font-size: 18px;
  padding-left: 15px;
`;

export const StyledReviewsText = styled.p`
  display: flex;
  font-size: 16px;
  padding-left: 15px;
`;

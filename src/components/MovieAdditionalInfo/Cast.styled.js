import styled from 'styled-components';

export const StyledCastList = styled.ul`
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

export const StyledCastItem = styled.li`
  text-align: center;
  border-radius: 2px;
  margin-bottom: 25px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const StyledCastErrorItem = styled.li`
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

export const StyledCastImg = styled.img`
  width: 100%;
  height: 82%;
  object-fit: cover;
`;

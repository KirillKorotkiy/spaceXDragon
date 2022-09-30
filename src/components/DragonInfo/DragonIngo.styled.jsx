import styled from 'styled-components';

export const TechnicalOverview = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
`;
export const InfoItem = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  border-bottom: 1px solid rgb(134, 134, 134);
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
export const Unit = styled.div`
  text-transform: lowercase;
  color: rgb(134, 134, 134);
`;
export const TechnicalMain = styled.div`
  margin-bottom: 35px;
`;
export const TechnicalTitle = styled.h2`
  text-transform: uppercase;
  font-size: 22px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

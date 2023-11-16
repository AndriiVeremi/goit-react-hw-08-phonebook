import styled from '@emotion/styled';
import Images2 from '../../images/b.jpg';

export const Containers = styled.div`
  display: flex;
  gap: 30px;
  border: 2px dotted #828e6d;
  border-radius: 25px;
  background-image: url(${Images2});
  background-size: cover;
  background-repeat: no-repeat;
  height: 930px;
  padding: 50px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  margin: 40px;
  color: #828e6d;
`;

export const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 15px;
  color: #8e6d8a;
`;


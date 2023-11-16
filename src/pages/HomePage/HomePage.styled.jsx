import styled from '@emotion/styled';
import Images2 from '../../images/a.jpg';

export const Container = styled.div`
  border: 2px dotted #828e6d;
  width: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  background-image: url(${Images2});
  background-size: cover;
  background-repeat: no-repeat;
  height: 930px;
  padding: 30px;
`;

export const Photo = styled.div`
  width: 250px;
  margin-bottom: 50px;
`;

export const Img = styled.img`
  padding-top: 180px;
`;

export const TextArea = styled.div`
  width: 450px;
`;

export const Title = styled.p`
  
  font-size: 30px;
  font-weight: 700;
  color: #828e6d;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #8e6d8a;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
`;

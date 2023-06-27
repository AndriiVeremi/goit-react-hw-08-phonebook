import React from 'react';
import { Conteiner, Info, Title, Text } from './NotFound.styled';

const PageNotFound = () => {
  return ( 
      <Conteiner>
        <Info>
          <Title>404</Title>
          <Text>Page not found...</Text>
        </Info>
      </Conteiner> 
  );
};

export default PageNotFound;
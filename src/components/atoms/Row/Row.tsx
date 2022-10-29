import React from 'react';

import { Container } from './styles';

const Row = ({children}: any) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Row;
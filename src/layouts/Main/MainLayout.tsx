import React from 'react';

import { Container } from './styles';

const MainLayout = ({children}: any) => {
  return(
    <Container>
      {children}
    </Container>
  );
}

export default MainLayout;

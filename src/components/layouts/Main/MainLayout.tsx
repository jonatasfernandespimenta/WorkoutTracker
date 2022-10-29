import React from 'react';

import { Container } from './styles';

const MainLayout = ({children, center}: any) => {
  return(
    <Container>
      {children}
    </Container>
  );
}

export default MainLayout;

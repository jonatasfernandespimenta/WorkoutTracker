import React from 'react';

import { Container } from './styles';
import { TCardProps } from './types';

const Card = (props: TCardProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default Card;

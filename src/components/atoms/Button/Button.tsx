import React from 'react';
import { View } from 'react-native';
import Text from '../Text';

import { StyledButton } from './styles';
import { TButtonProps } from './types';

const Button = (props: TButtonProps) => {
  return (
    <StyledButton {...props}>
      <Text color='white'>{props.title}</Text>
    </StyledButton>
  );
}

export default Button;
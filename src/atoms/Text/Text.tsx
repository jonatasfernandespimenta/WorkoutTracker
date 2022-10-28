import React from 'react';

import { StyledText } from './styles';
import { TTextProps } from './types';

const Text = (props: TTextProps) => {
  return (
    <>
      <StyledText color={props.color} bold={props.bold}>
        {props.children}
      </StyledText>
    </>
  );
}

export default Text;

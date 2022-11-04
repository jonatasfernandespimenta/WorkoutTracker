import styled from 'styled-components/native';
import { TInputProps } from './types';

export const Container = styled.View<TInputProps>`
  flex-direction: row;
  margin-top: 4px;
`;

export const StyledInput = styled.TextInput<TInputProps>`
  height: 30px;
  border-width: 1px;
  border-color: #CE3DF3;
  border-radius: 5px;
  flex: 1;
  border-top-right-radius: ${props => props.metric ? '0' : '5px'};
  border-bottom-right-radius: ${props => props.metric ? '0' : '5px'};
  color: #fff;
  background: ${props => props.filled ? '#CE3DF3' : 'transparent'};
`;

export const Metric = styled.View<TInputProps>`
  background: #CE3DF3;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

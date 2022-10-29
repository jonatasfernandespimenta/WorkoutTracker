import styled from 'styled-components/native';
import { TTextProps } from './types';

export const StyledText = styled.Text<TTextProps>`
  font-weight: ${props => props.bold ? 'bold' : 'regular'};
  color: ${props => props.color || 'white'};
`;

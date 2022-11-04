import styled from 'styled-components/native';
import { TColProps } from './types';

export const Container = styled.View<TColProps>`
  flex-direction: column;
  align-items: ${props => props.align || 'center'};
  flex: ${props => props.flex || 1};
  margin-right: ${props => props.mr || 0};
  margin-left: ${props => props.ml || 0};
`;


import styled from 'styled-components/native';
import { TCircleWTextProps } from './types';

export const Container = styled.TouchableOpacity<TCircleWTextProps>`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  background: ${props => props.active ? "#CE3DF3" : "#1C1F26"};
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

import styled from "styled-components/native";
import { TCardProps } from "./types";

export const Container = styled.View<TCardProps>`
  background: #272a33;
  border: 1px solid #ce3df3;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  min-height: ${props => props.minH || '100px'};
  height: ${props => props.height || 'auto'};
  margin-bottom: 10px;
`;

export const TouchableContainer = styled.TouchableOpacity<TCardProps>`
  background: #272a33;
  border: 1px solid #ce3df3;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  min-height: ${props => props.minH || '100px'};
  height: ${props => props.height || 'auto'};
  margin-bottom: 10px;
`;

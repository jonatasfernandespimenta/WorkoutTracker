import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import Row from '../Row';
import { TDifficultyProps } from './types';

// import { Container } from './styles';

const Difficulty = (props: TDifficultyProps) => {
  return(
    <Row>
      {[...Array(props.difficulty)].map((star, index) => {
        return (
          <FontAwesome key={index} name="star" size={20} color="#ce3df3" />
        );
      })}

    </Row>
  );
}

export default Difficulty;

import React from 'react';
import { View } from 'react-native';
import Card from '../../components/atoms/Card';
import Header from '../../components/atoms/Header';
import MainLayout from '../../components/layouts/Main/MainLayout';
import WorkoutInfoHeader from '../../components/molecules/WorkoutInfoHeader';

import { Container } from './styles';

const WorkoutInfo: React.FC = () => {
  return (
    <>
      <WorkoutInfoHeader />
      
      <MainLayout>
        <Container>
          <Card height='98%'>

          </Card>
        </Container>
      </MainLayout>
    </>
  );
}

export default WorkoutInfo;

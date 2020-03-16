import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CardQueue from './index'

storiesOf('CardQueue', module)
  .add('card queue dokter', () => (
    <CardQueue
      name={"Dr. Susilo"}
      number={"A17"}
    />
  ));
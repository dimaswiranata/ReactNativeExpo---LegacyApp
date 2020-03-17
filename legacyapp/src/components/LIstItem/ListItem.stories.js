import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ListItem from './index'

storiesOf('Component ListItem', module)
  .add('default', () => (
    <ListItem/>
));
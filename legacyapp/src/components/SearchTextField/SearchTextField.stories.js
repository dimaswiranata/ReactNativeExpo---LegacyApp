import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SearchTextField from './index'

storiesOf('SearchTextField', module)
  .add('Search text field', () => (
    <SearchTextField/>
));
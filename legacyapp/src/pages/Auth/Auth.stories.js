import React from 'react';
import { storiesOf } from '@storybook/react-native'
import Auth from './index'

storiesOf('PAGE | Authentication Screen', module)
  .add('default', () => <Auth />)
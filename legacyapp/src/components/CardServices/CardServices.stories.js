import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CardServices from './index'

storiesOf('CardServices', module)
  .add('Card services', () => (
    <CardServices
        image={"https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_960_720.png"}
        item={"Baju"}
        price= {10000}
    />
));
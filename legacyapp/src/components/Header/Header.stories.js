import React from 'react';
import { storiesOf } from '@storybook/react-native'
import Header from './index'

storiesOf('Header', module)
  .add('default', () => {
    return (
      <Header 
        title='Toyota Astra Motor'
      />
    )
  })
  .add('header with backbutton', () => {
    return (
      <Header 
        title='Toyota Astra Motor'
        backButton={ true }
      />
    )
  })
  .add('header with homebutton', () => {
    return (
      <Header 
        title='Toyota Astra Motor'
        homeButton={ true }
      />
    )
  })
  .add('header with search bar and back button', () => {
    return (
      <Header 
        title='Toyota Astra Motor'
        backButton={true}
        searchBar={true}
      />
    )
  })

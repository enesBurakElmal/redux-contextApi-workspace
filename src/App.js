import React from 'react'
import './App.css'

import Navbar from './components/navbar/navbar-component'
import DisplayProducts from './components/display-products/display-products'

//Here is Left Content
import SortingComponent from './components/sorting-component/sorting-component'
import BrandsComponent from './components/brands-component/brands-component'
import TagsComponent from './components/tags-component/tags-component'

import {
  AppContainer,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  ColumnContent,
} from './app-elements'

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      {/* <DisplayProducts /> */}
      <LeftColumn>
        <SortingComponent />
        <BrandsComponent />
        <TagsComponent />
      </LeftColumn>
      <MiddleColumn>AS</MiddleColumn>
      <RightColumn>RA</RightColumn>
    </AppContainer>
  )
}

export default App

import React from 'react'
import './App.css'

import Navbar from './components/navbar/navbar-component'
import DisplayProducts from './components/display-products/display-employees'

//Here is Left Content
import SortingComponent from './components/sorting-component/sorting-component'
import BrandsComponent from './components/brands-component/brands-component'
import TagsComponent from './components/tags-component/tags-component'
import EmployeesIndex from './components/display-products/employees-index.component'
import PayloadComponent from './components/payload-component/payload-component'

import {
  AppContainer,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  ColumnContent,
} from './app-elements'

const App = () => {
  return (
    <div>
      <Navbar />
      <AppContainer>
        <LeftColumn>
          <SortingComponent />
          <BrandsComponent />
          <TagsComponent />
        </LeftColumn>
        <MiddleColumn>
          <EmployeesIndex />
        </MiddleColumn>
        <RightColumn>
          <PayloadComponent />
        </RightColumn>
      </AppContainer>
    </div>
  )
}

export default App

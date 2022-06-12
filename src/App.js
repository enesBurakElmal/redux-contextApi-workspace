import React from 'react'
import './App.css'

import Navbar from './components/navbar/navbar-component'

//Here is Left Content
import SortingComponent from './components/sorting-component/sorting-component'
import BrandsComponent from './components/brands-component/brands-component'
import TagsComponent from './components/tags-component/tags-component'
import EmployeesIndex from './components/display-products/employees-index.component'
import PayloadComponent from './components/checkout/checkout.component'

import {
  AppContainer,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  ColumnContent,
} from './app-elements'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { price: 0 }
    this.handlePriceChange = this.handlePriceChange.bind(this)
  }

  // const dispatch = useDispatch()
  // const todos = useSelector((state) => state.todos)

  handlePriceChange = (event) => {
    this.setState({ price: this.props.price })
  }

  render() {
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
            <PayloadComponent cartItem={this.props.cartItem} />
          </RightColumn>
        </AppContainer>
      </div>
    )
  }
}

export default App

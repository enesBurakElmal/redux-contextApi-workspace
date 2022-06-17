import React, { Component, Fragment } from 'react'

import Navbar from './components/navbar/navbar-component'

//Here is Left Content
import SortingComponent from './components/sorting-component/sorting-component'
import BrandsComponent from './components/brands-component/brands-component'
import TagsComponent from './components/tags-component/tags-component'
import EmployeesIndex from './components/display-products/display-products.component'
import PayloadComponent from './components/checkout/checkout.component'

import styles from './app.module.scss'

import { CartProvider } from './contexts/cart-item.context'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onProducts: [],
      searchfield: '',
    }
  }

  render() {
    const { onProducts, searchfield } = this.state
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Navbar />
        <div className={styles.appContainer}>
          {/* <div className={styles.testDiv}> */}
          <div className={styles.leftColumn}>
            <SortingComponent />
            <BrandsComponent />
            <TagsComponent />
          </div>
          <div className={styles.middleColumn}>
            <EmployeesIndex />
          </div>
          <div className={styles.rightColumn}>
            <PayloadComponent cartItem={this.props.cartItem} />
          </div>
        </div>
        {/* </div> */}
      </div>
    )
  }
}

export default App

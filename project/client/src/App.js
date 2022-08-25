import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
        <div style={{padding: '30px 10px'}}>
          <Header/>
          <Footer/>
        </div>
      </>
    )
  }
}


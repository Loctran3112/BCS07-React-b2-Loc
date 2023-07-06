import React, { Component } from 'react'
import Glassed from './Glassed'

export default class Main extends Component {

  render() {
    return (
      <div>
        <h2 className='text-center bg-black text-light bg-opacity-10 p-5 mb-5'>Try Glass App Online</h2>
        <div className='container'>
        <div className='bg-dark bg-opacity-50 p-5 mt-5 mb-5'>
          <Glassed/>
        </div>
      </div>
      </div>
    )
  }
}

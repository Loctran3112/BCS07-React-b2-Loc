import React, { Component } from 'react'

export default class Glassed extends Component {
  state = {
    typee: 'v2',
  };
  handleChangeGlass = (value) => {
    this.setState({typee:value});
  };
  render() {
    let { typee } = this.state;
    return (
      <div className='container row justify-content-around align-content-center'>
        <img src='./img/Snoop-Dogg.webp' alt='' className='' id='imageModel' />
        <img src={`./img/${typee}.png`} alt='' className='' id='glassButton' />
        <div className='row mt-5'>
          <div className='col-6 mb-5 text-center'>
          <img src='./img/v1.png' className='w-25' alt='' onClick={(value)=>{this.handleChangeGlass('v1');}}/>
          </div>
          <div className='col-6 mb-5 text-center'>
          <img src='./img/v2.png' className='w-25' alt='' onClick={(value)=>{this.handleChangeGlass('v2');}}/>
          </div>
          <div className='col-6 mb-5 text-center'>
          <img src='./img/v3.png' className='w-25' alt='' onClick={(value)=>{this.handleChangeGlass('v3');}}/>
          </div>
          <div className='col-6 mb-5 text-center'>
          <img src='./img/v4.png' className='w-25' alt='' onClick={(value)=>{this.handleChangeGlass('v4');}}/>
          </div>
          <div className='col-6 mb-5 text-center'>
          <img src='./img/v5.png' className='w-25' alt='' onClick={(value)=>{this.handleChangeGlass('v5');}}/>
          </div>
          <div className='col-6 mb-5 text-center'>
          <img src='./img/v6.png' className='w-25' alt='' onClick={(value)=>{this.handleChangeGlass('v6');}}/>
          </div>
          <div className='col-6 text-center'>
          <img src='./img/v7.png' className='w-25' alt='' onClick={(value)=>{this.handleChangeGlass('v7');}}/>
          </div>
          <div className='col-6 text-center'>
          <img src='./img/v8.png' className='w-25' alt='' onClick={(value)=>{this.handleChangeGlass('v8');}}/>
          </div>
        </div>
      </div>
    )
  }
}


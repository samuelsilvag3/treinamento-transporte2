import React, { Component } from 'react'

export default class Resposta extends Component {
  render() {
    return (
      <div className='form-group'>
            <label htmlFor='resposta'>Resposta:</label>
            <textarea
                id='resposta'
                name='Resposta'
                className='form-control'
                readOnly
            ></textarea>
      </div>
    )
  }
}

import React from 'react'

const Resposta = (props) => {
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

export default Resposta
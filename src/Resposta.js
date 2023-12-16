import React from 'react'

const Resposta = (props) => {
  return (
    <div className='form-group'>
            <label htmlFor='resposta'>Resposta:</label>
            <textarea
                id='resposta'
                className='form-control'
                value={props.mostrar}
            ></textarea>
      </div>
  )
}

export default Resposta
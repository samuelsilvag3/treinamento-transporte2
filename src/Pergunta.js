import React, { Component } from 'react'

export default class Pergunta extends Component {

  state = {
    consulta: ''
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.state.consulta = document.getElementById("pergunta").value

    //não esta atualizando a variavel de estado
    //this.setState({consulta: document.getElementById("pergunta").value})

    this.props.enviarPrompt(this.state.consulta)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
          <div>
            <textarea
              id="pergunta"
            ></textarea>
          </div>
          <div className='row'>
            <label htmlFor='enviar'>Digite aqui a sua Duvida:</label>
            <button id='enviar' className='btn btn-outline-primary mt-2'>Enviar</button>
          </div>
      </form>
    )
  }
}
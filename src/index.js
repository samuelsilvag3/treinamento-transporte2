import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Resposta from './Resposta'
import Pergunta from './Pergunta'
import axios from "axios"


class App extends React.Component{

    state = {
        resposta: null
    }

    enviarPrompt = async (consulta) => {
        console.log('Chamada http backend')
        
        await axios.post('http://localhost:4000/pergunte-ao-gpt', { prompt: consulta })
        .then(response => {
            console.log(`Consulta: ${consulta}`);
            console.log(response);
            this.setState({resposta: response.data.completion})
            console.log(this.state.resposta);
        })
        .catch(erro => {
            console.log(erro);
        })
    }


    render(){
        console.log('Metodo render')
        
        return <div className='container mt-2'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Resposta mostrar={this.state.resposta}/>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Pergunta enviarPrompt={this.enviarPrompt}/>
                </div>
            </div>
        </div>
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)
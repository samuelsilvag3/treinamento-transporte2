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
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src="https://nslogtransportes.com.br/wp-content/uploads/2021/06/cropped-selo-35-180x180.png" width="30" height="30" alt=""/>
                Treinamento Transportes
                </a>
            </nav>
            <div className='d-flex justify-content-center mt-2 p-3'>
            <div className='row col-md-4 border-1 border-round border-400'>
                <img src="https://nslogtransportes.com.br/wp-content/uploads/2021/04/trabqlhe-sonosco-1024x755.jpg" height="320" alt=""/>
            </div>
            <div className='col-md-8 mt-2 p-3'>            
                <div className='mt-2'>
                    <Resposta mostrar={this.state.resposta}/>
                </div>
                <div className='mt-2'>
                    <Pergunta enviarPrompt={this.enviarPrompt}/>
                </div>
            </div>
            </div>
        </div>
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)
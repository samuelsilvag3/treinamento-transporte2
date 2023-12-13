import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Resposta from './Resposta'


class App extends React.Component{

    state = {
        resposta: null,
        mensagemDeErro: null
    }

    componentDidMount(){
        console.log('Componente montado')
    }

    componentDidUpdate(){
        console.log('Componente atualizado')
    }

    componentWillUnmount(){
        console.log('Componente desmontado')
    }

    enviarPrompt = () => {
        console.log('Chamada http backend')
    }

    render(){
        //console.log('Metodo render')
        return <div className='container mt-2'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <Resposta/>
                </div>
            </div>
        </div>
    }

}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)
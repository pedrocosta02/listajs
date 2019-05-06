import React from 'react';
import FormLista from './formLista';
import Listagem from './listagem';
import './App.css';

class Lista extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tarefa: '',
      listaDeTarefas: []
    };
    this.handlerChangeTarefa = this.handlerChangeTarefa.bind(this);
    this.cadastrarTarefa = this.cadastrarTarefa.bind(this);
    this.apagarTarefa = this.apagarTarefa.bind(this);
  }


  handlerChangeTarefa(event){
    this.setState({ tarefa: event.target.value });
  }

  cadastrarTarefa(event){
    let tempListaDeTarefas = this.state.listaDeTarefas;
    // tempListaDeTarefas.push({ text: this.state.tarefa, id: new Date().getTime() });
    if ( tempListaDeTarefas.length < 7 ) {
        tempListaDeTarefas.push({ text: this.state.tarefa, id: new Date().getTime() });
    }
    this.setState({ listaDeTarefas: tempListaDeTarefas, tarefa: '' });
  }

  apagarTarefa(id){
    let tempListaDeTarefas = this.state.listaDeTarefas;
    let tarefaIndex = tempListaDeTarefas.findIndex(item => item.id === id);
    tempListaDeTarefas.splice(tarefaIndex, 1);
    this.setState({listaDeTarefas: tempListaDeTarefas });
  }

  render(){
    let tela = (
      <div className='container'>
        <FormLista 
          handlerChangeTarefa={this.handlerChangeTarefa}
          tarefa={this.state.tarefa}
          cadastrarTarefa={this.cadastrarTarefa}/>
          <Listagem
          listaDeTarefas={this.state.listaDeTarefas}
          apagarTarefa={this.apagarTarefa}/>
      </div>
    );
    return tela;
  }
}

export default Lista;
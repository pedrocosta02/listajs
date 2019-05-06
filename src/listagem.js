import React from 'react';

class Listagem extends React.Component {
  render(){
    return (
    <div>
        <ul class="itemLi">
          {this.props.listaDeTarefas.map(
          item => <li class="itemLi_st" key={item.id} >{item.text} 
          <span class="itemLi_delete" 
          onClick={this.props.apagarTarefa.bind(this, item.id)} >Delete</span></li>
          )}
        </ul>
    </div>
    );
  }
}

export default Listagem;
import React from 'react';

class FormLista extends React.Component {
  render(){
    return (
      <div className='form'>
        <input class="inputItem" type='text' placeholder='Item Name' onChange={ this.props.handlerChangeTarefa } value={this.props.tarefa} /> 
        <button class="buttonItem" onClick={ this.props.cadastrarTarefa }>+ Add Item</button>
      </div>
    );
  }
}

export default FormLista;
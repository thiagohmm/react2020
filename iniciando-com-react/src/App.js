import React from 'react';



class App extends React.Component{
  state = {
    nome: ''
  }

  criaCombobox = () => {
    const opcoes = ["Fulano", "ciclano"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount(){
    console.log("Executou o componente DidMount")

  }

  modificarNome = (event) => {
    let nomemodificado = event.target.value;
    this.setState({
      nome: nomemodificado
    })
  }
  render(){
    console.log("Executou o render")
    return(
    <>
    <input className="texto-centralizado" type="text" value={this.state.nome} onChange={this.modificarNome}></input>
    <h1>Hello {this.state.nome} {this.props.nome} e sua idade {this.props.idade}</h1>
    {this.criaCombobox()}

    </>
    )
  }
}
export default App;
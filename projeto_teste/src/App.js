import React from 'react';



class Thiago extends React.Component{
  state = {
    numero1: ''
    
  }


  somamais2 = (e) => {
    let numeroinput = e.target.value;
    let saida = parseInt(numeroinput)  + 2
    
    
    this.setState({
      numero : saida
    })
  }

  render(){
    return(
      <React.Fragment>
        <h1>{this.state.numero}</h1>
        <input type="text" id="fname" name="fname" value={this.state.numero} onChange={this.somamais2}></input>

      </React.Fragment>
    )
  }
}

export default Thiago;

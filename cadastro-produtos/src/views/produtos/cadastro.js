import React from 'react';
import ProdutoService from '../../app/produtosService';

class CadastroProduto extends React.Component {
  constructor() {
    super();
    this.service = new ProdutoService();
  }
  state = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
  };

  setaValor = (event) => {
    let valor = event.target.value;
    let nomeDoCampo = event.target.name;
    this.setState({ [nomeDoCampo]: valor });
  };

  gravaValor = (event) => {
    console.log(this.state);
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
    };
    this.service.salvar(produto);
    console.log('salvo com sucesso');
    this.limpaTudo();
    this.setState({ sucesso: true });
  };

  limpaTudo = (event) => {
    this.setState({
      nome: '',
      sku: '',
      descricao: '',
      preco: 0,
      fornecedor: '',
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">Cadastro de Produtos</div>
        <div className="card-body">
          {this.state.sucesso ? (
            <div class="alert alert-dismissible alert-success">
              <button type="button" className="close" data-dismiss="alert">
                &times;
              </button>
              <strong>Sucesso!!!</strong> Cadastro gravado com Sucesso
            </div>
          ) : (
            <> </>
          )}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input
                  type="text"
                  name="nome"
                  onChange={this.setaValor}
                  value={this.state.nome}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input
                  type="text"
                  name="sku"
                  onChange={this.setaValor}
                  value={this.state.sku}
                  className="form-control"
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição:</label>
                <textarea
                  name="descricao"
                  onChange={this.setaValor}
                  value={this.state.descricao}
                  className="form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: *</label>
                <input
                  name="preco"
                  onChange={this.setaValor}
                  type="text"
                  value={this.state.preco}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input
                  type="text"
                  name="fornecedor"
                  onChange={this.setaValor}
                  value={this.state.fornecedor}
                  className="form-control"
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <button onClick={this.gravaValor} className="btn btn-success">
                Salvar
              </button>
            </div>
            <div className="col-md-1">
              <button onClick={this.limpaTudo} className="btn btn-primary">
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroProduto;

import React from 'react';

function Home() {
  return (
    <div classNameName="jumbotron">
      <h1 className="display-3">Bem Vindo!</h1>
      <p className="lead">
        Este é seu sistema utilize a barra de navegação para acesso
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classNameNamees for typography and spacing to space
        content out within the larger container.
      </p>
      <p className="lead">
        <a
          className="btn btn-primary btn-lg"
          href="#/cadastro-produtos"
          role="button"
        >
          Cadastrar
        </a>
      </p>
    </div>
  );
}

export default Home;

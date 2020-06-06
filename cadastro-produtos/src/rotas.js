import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import CadastroProdutos from './views/produtos/cadastro';

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path="/cadastro-produtos"
          component={CadastroProdutos}
        />
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
};

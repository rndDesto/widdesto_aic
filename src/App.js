import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import pages from './pages';
import PageBase from './layout/PageBase';

const rootPages = pages.map( (val, index) => {
  return <Route component={val.componentName} exact key={index} path={val.rootName} />;
});

const App = () => {

  return (
    <BrowserRouter>
      <PageBase>
        <Switch>
          {rootPages}
        </Switch>
      </PageBase>
    </BrowserRouter>
  );
};

export default App;

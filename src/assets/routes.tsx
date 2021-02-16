import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Create from '../pages/Create';

function Routes(){
 return(
  <BrowserRouter>
   <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/create' component={Create} />
    </Switch>
  </BrowserRouter>
 )
}
export default Routes;

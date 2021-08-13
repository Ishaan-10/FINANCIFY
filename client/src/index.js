import React,{createContext} from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import NotFound from './components/NotFound';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path='/' component={Home} exact />
      <Route path='/home' component={Home} exact />
      <Route path='/signin' component={SigninPage} exact />
      <Route path='/signup' component={SignupPage} exact />
      <Route component={NotFound} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

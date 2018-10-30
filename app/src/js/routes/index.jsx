import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/AppHeader/Header";

import { PrivateRoute } from "../helpers/PrivateRoute";
import { history } from "../store";
import { HomePage } from "../components/Home";
import { AppRegister } from "../components/Authentication/Register";
import { AppLogin } from "../components/Authentication/Login";
import { AppClient } from "../components/Clients/RoutComp";
import { AppSample } from "../components/Samples/RoutComp";
import { AppResult } from "../components/Results/RoutComp";
import { AppProducts } from "../components/Products/RoutComp";
import { AppUsers } from "../components/Users/RoutComp";

const Routes = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header name="LACMA" />
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/register" component={AppRegister} />
          <Route path="/login" component={AppLogin} />
          <Route path="/clients" component={AppClient} />
          <Route path="/results" component={AppResult} />
          <Route path="/samples" component={AppSample} />
          <Route path="/products" component={AppProducts} />
          <Route path="/users" component={AppUsers} />
        </div>
      </Router>
    </div>
  )
}

export default Routes
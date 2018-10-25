import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/AppHeader/Header";

import { history } from "../store";
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
          <Header />
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
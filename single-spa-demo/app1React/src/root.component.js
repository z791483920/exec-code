import React from "react";
import { Provider, connect } from "react-redux";
import Counter from "./Counter";
import reactLogo from "../assets/react-logo.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import A from "./A";
import B from "./B";

export default class Root extends React.Component {
  state = {
    store: this.props.store,
    globalEventDistributor: this.props.globalEventDistributor,
  };

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  renderContent() {
    const prefix = window.Wrapper ? "/app1" : "";
    return (
      <Router>
        <Link to={`${prefix}/a`}>a</Link>
        <Link to={`${prefix}/b`}>b</Link>

        <Switch>
          <Route exact path={`${prefix}/a`} render={() => <A />} />
          <Route exact path={`${prefix}/b`} render={() => <B />} />
        </Switch>
      </Router>
    );
  }

  render() {
    let ret = <div></div>;
    if (!window.Wrapper) {
      const store = require("./store");
      console.log(store, "store");
      ret = (
        <Provider store={store.storeInstance}>
          <div>
            <h3>我是自身导航栏</h3>

            <div style={{ marginTop: 100 }}>
              <img src={reactLogo} style={{ width: 100 }} /> <br />
              This was rendered by App1, which is written in React.
              <Counter
                globalEventDistributor={this.state.globalEventDistributor}
              />
              <div>{this.renderContent()}</div>
            </div>
          </div>
        </Provider>
      );
    } else {
      if (this.state.store && this.state.globalEventDistributor) {
        ret = (
          <Provider store={this.state.store}>
            <div style={{ marginTop: 100 }}>
              <img src={reactLogo} style={{ width: 100 }} /> <br />
              This was rendered by App1, which is written in React.
              <Counter
                globalEventDistributor={this.state.globalEventDistributor}
              />
              <div>{this.renderContent()}</div>
            </div>
          </Provider>
        );
      }
    }

    return ret;
  }
}

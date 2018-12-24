import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import PostContainer from "./components/containers/PostContainer";
import PostFormContainer from "./components/containers/PostFormContainer";
import PostDetailContainer from "./components/containers/PostDetailContainer";
import NotFound from "./components/pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/oops" component={NotFound} />
              <Route exact path="/" component={PostContainer} />
              <Route exact path="/new" component={PostFormContainer} />
              <Route exact path="/edit" component={PostFormContainer} />
              <Route exact path="/:category" component={PostContainer} />
              <Route
                exact
                path="/:category/:id"
                component={PostDetailContainer}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import UserListContainer from "./container/User/UserListContainer";
import UserContainer from "./container/User/UserContainer";
import TaskListContainer from "./container/Task/TaskListContainer";
import TaskContainer from "./container/Task/TaskContainer";
import UserTaskContainer from "./container/Task/UserTaskContainer";

import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/users" component={UserListContainer} />
            <Route exact path="/user" component={UserContainer} />
            <Route exact path="/user/:id" component={UserContainer} />
            <Route exact path="/tasks" component={TaskListContainer} />
            <Route exact path="/task" component={TaskContainer} />
            <Route exact path="/task/:id" component={TaskContainer} />
            <Route exact path="/usertasks/:id" component={UserTaskContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

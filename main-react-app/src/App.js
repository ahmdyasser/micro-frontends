import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import increment from "./actions/counter";

import React from "react";

function App(props) {
  const Counter1 = useSelector((state) => state.Counter1);
  const Counter2 = useSelector((state) => state.Counter2);

  const dispatch = useDispatch();

  return (
    <Router>
      <div className="header">
        <NavLink exact to="/" className="link" activeClassName="active-link">
          Home-Page
        </NavLink>
        <NavLink
          exact
          to="/micro-react1"
          className="link"
          activeClassName="active-link"
        >
          Sub-react1
        </NavLink>
        <NavLink
          exact
          to="/micro-react2"
          className="link"
          activeClassName="active-link"
        >
          Sub-react2
        </NavLink>
        <NavLink
          exact
          to="/dnd"
          className="link"
          activeClassName="active-link"
        >
          DND
        </NavLink>
      </div>
      <div className="content">
        <p>Passing counter to micro app1(Counter1) : {Counter1}</p>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment - Counter1
        </button>

        <p> counter getting changed by micro app2 (Counter2) : {Counter2}</p>
      </div>

      <div id="subapp-viewport"></div>
    </Router>
  );
}

export default App;

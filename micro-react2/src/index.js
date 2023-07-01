import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const microstore = createStore(
  (
    state = {
      Counter2: "Counter2 will show up when we integrate with main app",
    }
  ) => {
    return state;
  }
);

// to start separately
if (!window.__POWERED_BY_QIANKUN__) {
  ReactDOM.render(
    <Provider store={microstore}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

export async function bootstrap() {
  console.log("reactapp1 bootstrap");
}

// mount
export async function mount(props) {
  const { container, mainstore, incrementMicro2 } = props;
  ReactDOM.render(
    <Provider store={mainstore}>
      <App incrementaction={incrementMicro2} />
    </Provider>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// unmount
export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

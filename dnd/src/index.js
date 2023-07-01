import "./public-path";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


export async function bootstrap() {
  console.log("dnd bootstrap");
}

// mount
export async function mount(props) {
  const { container } = props;
  ReactDOM.render(
      <App />,
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

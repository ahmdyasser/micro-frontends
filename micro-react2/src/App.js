import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const Counter2 = useSelector((state) => state.Counter2);

  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1>Sub App 2</h1>
      <h2>Counter2:- {Counter2}</h2>
      <button
        onClick={() => {
          props.incrementaction
            ? dispatch(props.incrementaction())
            : (() => {})();
        }}
      >
        Increment - Counter2
      </button>
      <h5>
        On click of above button Counter 2 of main app will update when
        integrated with main app
      </h5>
    </div>
  );
}

export default App;

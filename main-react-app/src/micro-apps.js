import mainstore from "./store/store";
import incrementMicro2 from "./actions/counter2";

const microApps = [
  {
    name: "micro-react1", // app name registered
    // entry: "//micro-app1.netlify.app/",
    entry: "//localhost:3001/",
    container: "#subapp-viewport",
    activeRule: "/micro-react1",
    props: {
      mainstore,
    },
  },
  {
    name: "micro-react2", // app name registered
    // entry: "//micro-app2.netlify.app/",
    entry: "//localhost:3002/",
    container: "#subapp-viewport",
    activeRule: "/micro-react2",
    props: {
      mainstore,
      incrementMicro2,
    },
  },
  {
    name: "drag-and-drop", // app name registered
    // entry: "//micro-app2.netlify.app/",
    entry: "//localhost:3003/",
    container: "#subapp-viewport",
    activeRule: "/dnd",
    props: {
      mainstore,
    },
  }
];

export default microApps;

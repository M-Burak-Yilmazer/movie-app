import "./App.css";

import NavbarPart from "./components/NavbarPart";
import "react-toastify/dist/ReactToastify.css";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <NavbarPart />
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;

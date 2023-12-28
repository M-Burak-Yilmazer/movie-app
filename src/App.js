import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-gray-700 ">
      <Router />

      <ToastContainer />
    </div>
  );
}

export default App;

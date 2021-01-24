import "./App.css";
import Home from "./components/Home";
import NewForm from "./components/NewForm";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/addNewSchool" component={NewForm} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;

import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Weather from "./pages/Weather";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact={true}></Route>
          <Route path="/weather">
            <Weather />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

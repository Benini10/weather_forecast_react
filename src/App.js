import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Weather from "./pages/Weather";

function App() {
  return (
    <div>
      <Layout>
        <Route path="/weather">
          <Weather />
        </Route>
      </Layout>
    </div>
  );
}

export default App;

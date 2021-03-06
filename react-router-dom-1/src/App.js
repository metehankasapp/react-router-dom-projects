import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <div className="main">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId" exact>
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

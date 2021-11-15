import "./App.css";
import Home from "./pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AllProducts from "./pages/AllProducts/AllProducts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./shared/NavBar/NavBar";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Login/Register/Register";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/products">
              <AllProducts />
            </Route>
            <PrivateRoute path="/details/:productId">
              <ProductDetails />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

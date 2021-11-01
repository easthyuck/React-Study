import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import Links from "./components/Links.jsx";
import NavLinks from "./components/NavLinks.jsx";
import Login from "./pages/Login.jsx";

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route
          pash="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// 1 ~ 10
// 1 ~ 100
// 1 ~ 1000
// 1 ~ 10000

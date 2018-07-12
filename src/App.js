import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Colors from "./pages/colors"
import ShowColor from "./pages/colors/show"
import StarWars from "./pages/starwars"
import ShowStarWarsName from "./pages/starwars/show"
import BuzzWords from "./pages/buzzwords"
import ShowBuzzWord from "./pages/buzzwords/show"
import Cookies from "./pages/cookies"
import ShowCookie from "./pages/cookies/show"
import TestWithRouterPage from "./pages/test-withrouter-page"
import Menu from "./pages/menu"

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/colors" component={Colors} />
          <Route exact path="/colors/:id" component={ShowColor} />
          <Route exact path="/starwars" component={StarWars} />
          <Route exact path="/starwars/:id" component={ShowStarWarsName} />
          <Route exact path="/buzzwords" component={BuzzWords} />
          <Route exact path="/buzzwords/:id" component={ShowBuzzWord} />
          <Route exact path="/cookies" component={Cookies} />
          <Route exact path="/cookies/:id" component={ShowCookie} />
          <Route
            exact
            path="/testwithrouterpage"
            component={TestWithRouterPage}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

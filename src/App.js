import React from "react"
import { BrowserRouter } from "react-router-dom"
import Home from "./pages/menu"
import ListColors from "./pages/colors"
import ShowAColor from "./pages/colors/show"
import ListBuzzwords from "./pages/buzzwords"
import ShowABuzzword from "./pages/buzzwords/show"
import ListStarWarsNames from "./pages/starwars"
import ShowAStarWarsName from "./pages/starwars/show"
import ListCookies from "./pages/cookies"
import ShowACookie from "./pages/cookies/show"

/*
  TODO: Add missing routes to display the following components:
-Home
-ListColors
-ShowAColor
-ListBuzzwords
-ShowABuzzword
-ListStarWarsNames
-ShowAStarWarsName
-ListACookies
-ShowACookie
*/

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <BrowserRouter exact path="/" component={Home} />
        <BrowserRouter exact path="/listColors" component={ListColors} />
        <BrowserRouter exact path="/listColors/:id" component={ShowAColor} />
        <BrowserRouter exact path="/ListBuzzWords" component={ListBuzzwords} />
        <BrowserRouter
          exact
          path="/ListBuzzWords/:id"
          component={ShowABuzzword}
        />
        <BrowserRouter
          exact
          path="/ListStarWarsNames"
          component={ListStarWarsNames}
        />
        <BrowserRouter
          exact
          path="/ListStarWarsNames/:id"
          component={ShowAStarWarsName}
        />
        <BrowserRouter exact path="/listCookies" component={ListCookies} />
        <BrowserRouter exact path="/listCookies/:id" component={ShowACookie} />
      </div>
    </BrowserRouter>
  )
}

export default App

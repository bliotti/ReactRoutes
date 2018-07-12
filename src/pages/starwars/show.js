import React from "react"
import { withRouter } from "react-router"
import starWarsNames from "../../data/starwarsnames"
import { find } from "ramda"
import { Link } from "react-router-dom"

const ShowStarWarsName = ({ match, location, history }) => {
  /*
    TODO: This "show" page is meant to display a single name.  
          Find the name in the array of star wars names
          A matched path/route parameter can help you identify 
          the name to display.
    */
  const foundName = find(c => c.id === match.params.id, starWarsNames)

  return (
    <div className="vh-100">
      <h1>{foundName.name}</h1>
      <Link to="/starwars">Back</Link>
    </div>
  )
}

export default withRouter(ShowStarWarsName)

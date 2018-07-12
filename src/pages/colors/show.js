import React from "react"
import { withRouter } from "react-router"
import colors from "../../data/colors"
import { find } from "ramda"
import { Link } from "react-router-dom"

const ShowColor = ({ location, match, history }) => {
  /*
    TODO: This "show" page is meant to display a single color.  
          Find the buzzword in the array of buzzwords
          A matched path/route parameter can help you identify 
          the color to display.
  */
  const color = find(c => c.id === match.params.id, colors)

  return (
    <div className="vh-100">
      <h1 style={{ backgroundColor: color.value }}>{color.name}</h1>
      <Link to="/colors">Back</Link>
    </div>
  )
}

export default withRouter(ShowColor)

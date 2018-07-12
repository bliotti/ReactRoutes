import React from "react"
import { withRouter } from "react-router"
import words from "../../data/buzzwords"
import { find } from "ramda"
import { Link } from "react-router-dom"

const ShowBuzzWord = ({ match, location, history }) => {
  /*
    TODO: This "show" page is meant to display a single buzzword.  
          Find the buzzword in the array of buzzwords
          A matched path/route parameter can help you identify 
          the buzzword to display.
  */
  const foundWord = find(c => c.id === match.params.id, words)

  return (
    <div className="vh-100">
      <h1>{foundWord.name}</h1>
      <Link to="/buzzwords">Back</Link>
    </div>
  )
}

export default withRouter(ShowBuzzWord)

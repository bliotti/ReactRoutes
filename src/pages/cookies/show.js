import React from "react"
import { withRouter } from "react-router"
import fortuneCookies from "../../data/cookies"
import { find } from "ramda"
import { Link } from "react-router-dom"

const ShowCookie = props => {
  /*
    TODO: This "show" page is meant to display a single fortune cookie.  
          Find the fortune cookie in the array of fortune cookies
          A matched path/route parameter can help you identify 
          the cookie to display.
    */
  const foundCookie = find(c => c.id === props.match.params.id, fortuneCookies)

  return (
    <div className="vh-100">
      <h1>{foundCookie.name}</h1>
      <Link to="/cookies">Back</Link>
    </div>
  )
}

export default withRouter(ShowCookie)

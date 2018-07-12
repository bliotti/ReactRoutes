import React from "react"
import { Link } from "react-router-dom"
/*  
  TODO: 
  
  When the application starts display a menu page that contains an unordered list if items: 
  - Colors
  - Buzz Words
  - Star Wars Names
  - Fortune Cookie

  When a menu item is clicked send the user to the appropriate "list" page. 

  For example, clicking the "Colors" list item should 
   send the user to the page that displays a list of colors
*/

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">Buzz Words</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/cookie">Fotune Cookie</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu

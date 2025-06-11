import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Index</Link>
        <Link to="/tasks">Tasks</Link>
        {/* <Link to="/topics">Topics</Link> */}
        {/* <Link to="./components/Movie.js">Contact</Link> */}
        {/* <Link to="/meals">Meals</Link> */}
        {/* <Link to="/staff">Staff</Link> */}
        {/* <Link to="/finance">Finance</Link> */}
        {/* <Link to="./components/Movie.js">Gallery</Link> */}
    </nav>
  );
}

export default Navigation;

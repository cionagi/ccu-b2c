import React from 'react'
import PropTypes from 'prop-types'

const NavMenuItem = ({ text, url }) => {
  return (
    <div className="nav-menu-items">
      <a href={url} className="nav-menu-items__button">
        {text}
      </a>
    </div>
  )
}

NavMenuItem.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
}

export default NavMenuItem

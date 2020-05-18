import React from 'react'
import PropTypes from 'prop-types'

const NavTopButton = ({ text, url }) => {
  return (
    <div className="nav-top-button__container">
      <a className="nav-top-button__text" href={url}>
        {text}
      </a>
    </div>
  )
}

NavTopButton.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
}

export default NavTopButton

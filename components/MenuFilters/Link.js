// Dependency
import React from 'react'
import PropTypes from 'prop-types'

function Link({ title, url }) {
  return (
    <div className="menu-filters__subtitle">
      <a href={url}>{title}</a>
    </div>
  )
}

Link.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Link

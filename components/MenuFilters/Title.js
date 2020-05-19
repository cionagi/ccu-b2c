// Dependency
import React from 'react'
import PropTypes from 'prop-types'

function Title({ title }) {
  return <div className="menu-filters__title">{title}</div>
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title

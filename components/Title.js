import React from 'react'
import PropTypes from 'prop-types'

function Title({ title }) {
  return <h1 className="h1-title">{title}</h1>
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title

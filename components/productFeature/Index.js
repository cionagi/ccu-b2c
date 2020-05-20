// Dependency
import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'

// Components

const Index = ({ icon, title, description }) => {
  return (
    <div className="product-detail__feature">
      <div className="product-detail__feature_icon">
        <Icon>{icon}</Icon>
      </div>
      <div className="product-detail__feature_detail">
        <span className="product-detail__feature_title">{title}</span>
        <span className="product-detail__feature_description">{description}</span>
      </div>
    </div>
  )
}

Index.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Index

// Dependency
import React from 'react'
import LinkList from './LinkList'

const Footer = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <LinkList bold />
          </div>
          <div className="col-xs-12 col-md-4">
            <LinkList />
          </div>
          <div className="col-xs-12 col-md-4" />
        </div>
      </div>
    </div>
  )
}

export default Footer

// Dependency
import React from 'react'
import PropTypes from 'prop-types'

const LinkList = ({ items, bold }) => {
  const renderItems = () => {
    return items.map((item) => {
      return (
        <li key={item.id}>
          <a className={`footer-top__list${bold ? '-bold' : '-normal'}`} href={item.url}>
            {item.name}
          </a>
        </li>
      )
    })
  }

  return (
    <div className="footer-top__list">
      <ul>{renderItems()}</ul>
    </div>
  )
}

LinkList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  bold: PropTypes.bool,
}

LinkList.defaultProps = {
  items: [
    {
      id: 1,
      name: 'cerveza',
      url: 'cerveza',
    },
    {
      id: 11,
      name: 'cerveza',
      url: 'cerveza',
    },
    {
      id: 111,
      name: 'cerveza',
      url: 'cerveza',
    },
    {
      id: 1111,
      name: 'cerveza',
      url: 'cerveza',
    },
    {
      id: 1111113,
      name: 'cerveza',
      url: 'cerveza',
    },
    {
      id: 1111112,
      name: 'cerveza',
      url: 'cerveza',
    },
  ],
  bold: false,
}

export default LinkList

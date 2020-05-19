import React from 'react'
import Filters from './Filters'
import Title from './Title'
import Link from './Link'

function Index() {
  return (
    <div className="menu-filters">
      <div className="menu-filters__container">
        <Title title="Cervezas" />
        <div className="menu-filters__body">
          <Link title="NACIONALES" url="/" />
          <Link title="INTERNACIONALES" url="/" />
          <Link title="ARTESANALES" url="/" />
        </div>
      </div>
      <div className="menu-filters__container">
        <Title title="Filtros" />
        <div className="menu-filters__body">
          <Filters />
          <Filters />
          <Filters />
          <Filters />
        </div>
      </div>
    </div>
  )
}

Index.propTypes = {}
export default Index

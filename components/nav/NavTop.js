import React from 'react'
import NavTopButton from './NavTopButton'

const NavTop = () => {
  return (
    <div className="nav-top">
      <div className="container nav-top__container d-flex justify-content-between">
        <div className="d-flex justify-content-start">
          <NavTopButton text="Coctelera" />
          <NavTopButton text="Eventos" />
          <NavTopButton text="Categoria de clientes" />
        </div>
        <div className="d-flex justify-content-end">
          <NavTopButton text="Despacho" />
          <NavTopButton text="Usuario" />
          <NavTopButton text="Carro de compra" />
        </div>
      </div>
    </div>
  )
}

export default NavTop

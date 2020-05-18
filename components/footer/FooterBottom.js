// Dependency
import React from 'react'

const FooterBottom = () => {
  const date = new Date()
  return (
    <div className="footer-bottom">
      <div className="container">
        <p className="footer-bottom__text">
          {date.getFullYear()}
          &nbsp;CCU S.A Todos los derechos reservados. “CCU” es una marca registrada de CCU
        </p>
      </div>
    </div>
  )
}

export default FooterBottom

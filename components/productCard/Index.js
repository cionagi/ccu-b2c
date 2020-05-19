// Dependency
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

// Components

const Index = ({ product, horizontalView }) => {
  const { name, description, offer, price, priceRef, imgSrc, quantityStock } = product
  return (
    <div className="product-card">
      <div className={`product-card__container ${horizontalView && 'horizontal-view'}`}>
        <div className="product-card__offer_box">
          <div className="product-card__offer_label">
            <span className="num">{offer}</span>
            <span className="text">DE DCTO</span>
          </div>
        </div>
        <div className="product-card__box">
          <div className="product-card__image_container">
            <div className="product-card__image">
              <a href="/" className="">
                <img src={imgSrc} alt={name} />
              </a>
            </div>
          </div>
          <div className="product-card__info">
            <div className="product-card__detail">
              <div className="product-card__detail_name">{name}</div>
              <div className="product-card__detail_info">{description}</div>
            </div>
            <div className="product-card__price">
              <div className="product-card__price_value">{price}</div>
              <div className="product-card__price_ref">
                Precio Referencial:
                {priceRef}
              </div>
            </div>
            <div className="product-card__stock">
              <span>
                Stock Disponible:
                {quantityStock}
              </span>
            </div>
            <div className="product-card__buy">
              <div className="product-card__buy_add_to_bag">
                <Button variant="contained">Agregar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Index.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    offer: PropTypes.string,
    price: PropTypes.string,
    priceRef: PropTypes.string,
    imgSrc: PropTypes.string,
    quantityStock: PropTypes.string,
  }),
  horizontalView: PropTypes.bool,
}

export default Index

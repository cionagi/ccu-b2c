import React from 'react'
import PropTypes from 'prop-types'

import Carousel from '@brainhubeu/react-carousel'
import Title from '../Title'
import ProductCard from '../productCard/Index'

function Index({ products }) {
  const renderProducts = () => {
    return products.map((product) => {
      return (
        <div className="col" key={1 + product.id}>
          <ProductCard key={product.id} product={product} />
        </div>
      )
    })
  }

  return (
    <>
      <Title title="TE SUGERIMOS ESTOS PRODUCTOS" />
      <Carousel slidesPerPage={3} arrows infinite>
        {renderProducts()}
      </Carousel>
    </>
  )
}

Index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default Index

// Dependency
import React from 'react'

// Components
import Nav from '../components/nav/Index'
import Footer from '../components/footer/Index'
import ProductCard from '../components/productCard/Index'
import Title from '../components/Title'

// TODO remove
const PRODUCT_FAKE = {
  name: 'ESCUDO',
  description: '24 botellas de 355 cc',
  offer: '40%',
  price: '$9.990',
  priceRef: '$16.600',
  imgSrc: 'https://www.labarra.cl/481-large_default/escudo.jpg',
  quantityStock: '100',
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <div className="container">
          <section>
            <Title title="Lorem ipsum dolor sit amet " />
          </section>
          <div className="row">
            <div className="col-4">
              <ProductCard product={PRODUCT_FAKE} />
            </div>
            <div className="col-4">
              <ProductCard product={PRODUCT_FAKE} />
            </div>
            <div className="col-4">
              <ProductCard product={PRODUCT_FAKE} />
            </div>
            <div className="col-4">
              <ProductCard product={PRODUCT_FAKE} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

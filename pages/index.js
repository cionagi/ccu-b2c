// Dependency
import React from 'react'

// Components
import Nav from '../components/nav/Index'
import Footer from '../components/footer/Index'
import ProductCard from '../components/productCard/Index'
import Title from '../components/Title'
import MenuFilter from '../components/MenuFilters/Index'
import SuggestedProducts from '../components/suggestedProducts/Index'

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
            <Title title="Lorem ipsum dolor sit amet" />
          </section>
          <div className="row">
            <div className="col-3">
              <div className="row">
                <div className="col">
                  <MenuFilter />
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-4">
                  <ProductCard key={1} product={PRODUCT_FAKE} />
                </div>
                <div className="col-4">
                  <ProductCard key={2} product={PRODUCT_FAKE} />
                </div>
                <div className="col-4">
                  <ProductCard key={3} product={PRODUCT_FAKE} />
                </div>
                <div className="col-8">
                  <ProductCard key={4} product={PRODUCT_FAKE} horizontalView />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <SuggestedProducts key={11} products={[PRODUCT_FAKE, PRODUCT_FAKE, PRODUCT_FAKE]} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

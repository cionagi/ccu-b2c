// Dependency
import React from 'react'

// Components
import Nav from '../components/nav/Index'
import Footer from '../components/footer/Index'
import ProductCard from '../components/productCard/Index'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

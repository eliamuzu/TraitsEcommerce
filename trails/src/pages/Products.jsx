import React from 'react'
import ProductGrid from '../components/Products/ProductGrid.jsx'

function Products() {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <section>
          <div>
            <h1 className='text-3xl font-bold text-center pt-5'>All Products</h1>
            <p className='text-center'>Explore our wide range of products</p>
          </div>
        </section>

        <section>
          <div>
            <ProductGrid />
          </div>
        </section>
    </div>
  )
}

export default Products
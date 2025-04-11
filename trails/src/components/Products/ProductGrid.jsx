import React from 'react'
import ProductCard from './ProductCard.jsx'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext.jsx'

function ProductGrid() {

  const { products } = useContext(ProductContext);

  if (!products) return <p>Loading...</p>;

  if (!products || products.length === 0) return <p>No products available</p>; 
  //  Handle case where no products are provided
const filteredProducts = products.filter((product) => product.category === "men's clothing");
  //  Handle case where no products match the filter criteria

  return (
    <section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 p-4">
           {filteredProducts.map((product) => {
            return <ProductCard key={product?.id} product={product}/>
             })}
        </div>
      </div>

      <div className='flex justify-center mt-5'>
          <button className='bg-orange-100 text-black p-2 rounded-full hover:scale-105'>Load More</button>
      </div>
    </section>
   
  )
}

export default ProductGrid
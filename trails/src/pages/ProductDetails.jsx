import React from 'react'

function ProductDetails() {
  return (
    <div>
      <section className='flex flex-col md:flex-row justify-between items-center w-2/3'>
        {/*Image Pane */}
        <div>
          <img src={product?.image} alt="" className='h-1/2 w-1/2' />
        </div>
        {/*Product Details Pane */}
        <div className='w-1/2 '>

        </div>
      </section>

      <section> 
        <h1>See Similar Products</h1>
        <ProducctGrid category={category}/>
      </section>
    </div>
  )
}

export default ProductDetails
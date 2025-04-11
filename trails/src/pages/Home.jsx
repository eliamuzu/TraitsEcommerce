import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const products = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      image: '/src/images/tshirt.png',
      category: 'Shirts'
    },
    {
      id: 2,
      name: "Denim Jacket",
      image: "/src/images/denimj.jpg",
      category: 'Jackets'
    },
    {
      id: 3,
      name: "Running Shoes",
      image: "/src/images/cshoe.png",
      category: 'Coats'
    },
    {
      id: 4,
      name: "Black Hoodie",
      image: "/src/images/hoodie.png",
      category: 'Hoodies'
    },
  
  ];

  return (
    <main>
      < div className='bg-[url(/src/images/home.png)] h-[100vh] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center '>
          <div className=''>
            <p className='flex text-6xl md:text-9xl font-semi-bold text-left text-white
              mix-blend-isolate font-serif mix-blend-difference'>ELEGANCE IN ONE<br /> LOOK</p>
          </div>
      </div>

      <section className='flex flex-col justify-center items-center p-4 pr-0 pl-0 mt-5'>
      
        <p className='text-3xl font-serif capitalize '>TOP CATEGORIES</p>
        
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {
            products.map((product) => {
              return <Link key={product?.id} >
                        <div  className='flex justify-center hover:scale-110 hover:'>
                          <div className='m-5 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg/55'>
                            <div>
                              <img src={product.image} alt="" className='h-100 w-70 max-w-full'></img>
                              <p className='-mt-10 text-4xl font-bold text-white'>{product.category}</p>
                            </div>
                          </div>  
                        </div>
                      </Link>
             })
          }

        </div>

      </section> 
    
    </main>
  )
}

export default Home
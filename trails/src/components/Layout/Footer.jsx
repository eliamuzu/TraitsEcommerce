import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


function Footer() {
  return (
    <footer className='flex w-full bg-orange-100 p-10 justify-between shadow-lg pb-0 '>
        <div className=' flex flex-col md:flex-row justify-center items-center w-full md:justify-between'>
            <div className=''>
                <div className='w-full text-center'>
                    <h1 className='text-xl md:text-3xl font-bold'>TRAITS</h1>
                    <p className='font-thin text-lg mt-5'>Clothes You Look <br /> Good In</p>
                </div>
            </div> 

       
{/* NewsLetter*/}
        <div className='flex align-right p-7 rounded-xl shadow-lg justify-self-end'>
            <div className=' p-7 rounded-xl shadow-lg justify-self-end text-center'>
                <h1 className='text-xl md:text-2xl font-bold -mt-5'>Join Our Newsletter</h1>
                <p className='text-sm'>Get the latest news and updates</p>
                <input type="text" placeholder='Enter Your Email' className='p-2 w--full border rounded-full m-4 hover:bg-white'/>
                <button className='bg-white text-black p-2 hover:transition-all hover:scale-105'>Subscribe</button>
            </div>

        </div>

        <div className='flex text-2xl '>
                <a href="" ><FaInstagram className='m-10 ' /></a>
                <a href=""><FaXTwitter className='m-10' /></a>
                <a href=""><FaFacebookF className='m-10'/></a>
                
         </div>
         </div>
    </footer>
  )
}

export default Footer
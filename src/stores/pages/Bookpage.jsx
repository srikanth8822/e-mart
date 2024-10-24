import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'

const Bookpage = () => {
  return (
    <>
    <Navbar/>
      <div className='pageSection'>
        {
          booksData.map((item)=>{
            return(
              <div>
              <div className='pageImg'>
                <img src={item.image} alt=''/>
              </div>
              <div className="proModel">
                {item.title},{item.price}
              </div>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Bookpage
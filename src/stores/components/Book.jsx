import React from 'react'
import { booksData} from '../data/books'

const Book = () => {
    const firstFiveImages=booksData.slice(0,5)
    return (
      <>
      <div className='proTitle'><h2>BOOKS</h2> </div>
      <div className='proSection'>
      {
          firstFiveImages.map((item)=>{
              return(
                  <div className='imgBox'>
                      <img className='proImage' src={item.image} alt=''/>
                  </div>
              )
          })
      }
  </div>
  </>
    )
}

export default Book
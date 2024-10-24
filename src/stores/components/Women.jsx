import React from 'react'
import { womanData } from '../data/woman'

const Women = () => {
    const firstFiveImages=womanData.slice(0,5)
    return (
      <>
       <div className='proTitle'><h2>WOMEN</h2> </div>
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

export default Women
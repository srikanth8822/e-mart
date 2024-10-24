import React from 'react'
import { mobileDat } from '../data/proData'

const Prodata = () => {
    const firstFiveImages=mobileDat.slice(0,5)
    return (
      <>
      <div className='proTitle'><h2>PRODATA</h2> </div>
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

export default Prodata
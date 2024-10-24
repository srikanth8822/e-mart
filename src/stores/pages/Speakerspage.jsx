import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'

const Speakerspage = () => {
  return (
    <>
    <Navbar/>
      <div className='pageSection'>
        {
          speakerData.map((item)=>{
            return(
              <div>
              <div className='pageImg'>
                <img src={item.image} alt=''/>
              </div>
              <div className="proModel">
                {item.model},{item.price}
              </div>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Speakerspage
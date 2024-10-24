import React, { useState } from 'react'
import { mobileData } from '../data/mobiles' 
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
  const [selectedproduct, setselectedproduct]=useState([])
   
  const companyhandler=(mango)=>{
    if(selectedproduct.includes(mango)){
      setselectedproduct(selectedproduct.filter(item=>item !==mango))
    }else{
      setselectedproduct([...selectedproduct ,mango])
    }
  }

  const filteredproduct = selectedproduct.length===0?
  mobileData : mobileData.filter((orange)=>selectedproduct.includes(orange.company))

  return (
  <>
  <Navbar/>
 <div className='fullpage'>
 <div className='pro-selectedd'>
   {mobileData.map((phone)=>{
    return(
      <div className='pro-input'>
        <label>
          <input type='checkbox'
          checked={selectedproduct.includes(phone.company)}
          onChange={()=>companyhandler(phone.company)}/>
          {phone.company}
        </label>
        </div>
    )
   })}
  </div>

  
    <div className='pageSection'>
      {
        filteredproduct.map((item)=>{
          return(
            <div key={item.id} >
              <Link to= {`/mobiles/${item.id}`}>
              <div className='pageImg'>
              <img src={item.image} alt=''/>
            </div>
            </Link>
            <div className="proModel">
              {item.company},{item.price}
            </div>
          </div>
          )
        })
      }
    </div>

 </div>
  </>
  )
}

export default MobilePage
import React from 'react'
import { Link } from 'react-router-dom'
 import { useCart } from '../../context/cardcontext'

const Navbar = () => {
 
    const { cartItems }=useCart()


  return (
    <>
    <div className='navsection'>
        <div className='tittle'>
            <h2>E-mart</h2>
        </div>
        <div className='search'>
            <input type="text" placeholder='search...' />
        </div>
        <div className='user'>
            <div className='user-detail'>
                signIn/signUp
            </div>
        </div>
        <Link to="/cart">
        <div className='cart'>cartt
            <span>
                {cartItems.length}
             </span></div>
        </Link>
       
    </div>
    <div className='subMenu'>
        <ul>
           <Link to='/mobiles'> <li>Mobiles</li> </Link>
           <Link to='/ac'> <li>Ac</li> </Link>
           {/* <Link to="/Book"><li>Books</li></Link> */}
           <Link to="/computers"><li>Computers</li></Link>
           <Link to="/fridge"><li>fridges</li></Link>
           <Link to="/furniture"><li>Furnitures</li></Link>
           <Link to="/kitchen"><li>kitchen</li></Link>
           <Link to='/men'><li>mens</li></Link>
           <Link to='/women'><li>women</li></Link>
           <Link to="/watch"><li>watches</li></Link>
           {/* <Link to="/tv"><li>Tv's</li></Link> */}
           {/* <Link to="/speaker"><li>Speakers</li></Link> */}
        </ul>
    </div>
    </>
  )
}

export default Navbar
import React from 'react'
import Mobiles from './Mobiles'
import Computers from './computers'
import Ac from './Ac'
import Book from './Book'
import Fridge from './Fridge'
import Furniture from './Furniture'
import Kitchen from './Kitchen'
import Men from './Men'
import Prodata from './Prodata'
import Speaker from './Speaker'
import Tv from './Tv'
import Watch from './Watch'
import Women from './Women'

const Products = () => {
  return (
    <div>
      <Mobiles/>
      <Speaker/>
      <Prodata/>
      <Computers/>
      <Watch/>
      <Tv/>
      <Kitchen/>
      <Book/>
      <Men/>
      <Women/>
      <Ac/>
      <Furniture/>
      <Fridge/>
    </div>
  )
}

export default Products
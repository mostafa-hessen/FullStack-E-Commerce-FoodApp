import React from 'react'
import AddFood from './AddFood/AddFood'
import CardFood from './CooKerCard/CardFood'

function Menue() {

  return (
    <div className='container-fluid r'>
        <AddFood/>
        <CardFood/>
    </div>
  )
}

export default Menue
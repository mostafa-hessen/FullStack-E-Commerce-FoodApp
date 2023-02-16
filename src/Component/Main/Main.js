import React from 'react'
import Home from '../HomeUser/Home/Home'
import './Main.css'
function Main() {
  return (
       <div className="row">
        <div className="col-12 col-md-10 p-4  rounded-4" style={{backgroundColor:'#fff',maxHeight:'93vh',overflowY:"scroll"}}>
          <Home />
        </div>

        <div className='col-2' >
        </div>
      
      </div> 
  )
}

export default Main
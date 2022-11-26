import React from 'react'
import Footer from '../../Widgets/Footer/Footer'
import Header from '../../Widgets/Header/Header'
import './Projects.scss'

const Projects=()=>{
  return (
    <>
    <Header/>
      <div className='container-fluid project'>
        <div className="row">
            <div className="col-md-12">
                <h1 className='text-center'>Projects</h1>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Projects

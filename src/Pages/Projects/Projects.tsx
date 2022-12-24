import React, { useEffect, useState } from 'react'
import Footer from '../../Widgets/Footer/Footer'
import Header from '../../Widgets/Header/Header'
import './Projects.scss'
import latestProject from '../../assets/projects/TOCSIN.jpg'
import { ProjectData } from './Services/projectService'

const Projects = () => {
  const [projects, setProjects] = useState<any>()
  const imagePath = 'https://probunny.s3.ap-south-1.amazonaws.com/'
  useEffect(() => {
    ProjectData('', projectDataCB)

  }, [!projects])

  const projectDataCB = async (result: any) => {
    if (result) {
      setProjects(result.data.data.project.docs)
    }
    console.log(projects);

  }
  const cardView = (project: any) => {
    return <div className='col-md-3 m-4' key={project?._id}>
      <div className="card" style={{ width: '18rem' }}>
        {project && project.images.map((image: any, index: any) => {
          return <img src={imagePath + image} className="card-img-top" alt="cover" key={index} />
        })}
        <div className="card-body">
          <h5 className="card-title">{project?.title}</h5>
          <p className="card-text">{project?.description}</p>
          <a href={project?.url} className="btn btn-primary">Watch</a>
        </div>
      </div>
    </div>
  }

  return (
    <>
      <Header />
      <div className='container-fluid project'>
        <div className="row">
          <div className="col-md-12">
            <h1 className='text-center'>Our Projects</h1>
            <p className="text-center">We had done projects like movies, webseries, songs, advertisements.</p>
          </div>
          {projects && projects.map((project: any) => cardView(project))}
        </div>
        {/* <div className="row">
          <div className="col-md-12">
            <div className="row d-flex justify-content-center align-item-center p-2 latestPro">
              <div className="col-md-5">
                <h4>TOCSIN</h4>
                <p>Singer | Lyrics : T-Jay
                  Music | Mix and Master : Ripple Drift
                  Female Lead : Mansi Gupta
                  DOP | Direction : Gill Sanpreet
                  Edit : Jaswinder Wahra
                  Recorded at Silk Road Studios, Gr Noida.
                  Casting : Bunny Singhal
                  Styling : Swag Paaji</p>
                <a href='https://youtu.be/AXQQ51VLUzs' className='btn btn-outline-primary'>Watch Now</a>
              </div>
              <div className="col-md-5">
                <img src={latestProject} alt="latest project" className='latest' />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  )
}

export default Projects

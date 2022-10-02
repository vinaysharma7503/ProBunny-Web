import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Widgets/Footer/Footer'
import Header from '../../Widgets/Header/Header'
import latestProject from '../../assets/projects/TOCSIN.jpg'
import slider1 from '../../assets/slider/TOCSIN.jpg'
import slider2 from '../../assets/slider/BilliAkh.jpg'
import slider3 from '../../assets/slider/BilliAkh.jpg'
import './Home.scss'

interface Props {

}

const Home = (props: Props) => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 slider">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slider1} className="d-block w-100 imgslider" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={slider2} className="d-block w-100 imgslider" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={slider3} className="d-block w-100 imgslider" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row header-container d-flex justify-content-center align-item-center p-5">
                    <div className="col-md-5 p-2">
                        <h2>Hello, My Name is Bunny Singhal</h2><br />
                        <h4>I am an Actor & Casting Director.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in. Accusantium fugiat, dolorem officia exercitationem reprehenderit, maxime ipsum minima facere rerum expedita quaerat sequi commodi excepturi recusandae eligendi, nobis iste?</p>
                        <Link to='' className='btn btn-outline-primary'>Learn about me</Link>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className="row d-flex justify-content-center align-item-center p-5">
                    <div className="col-md-5 p-2">

                    </div>
                    <div className="col-md-5">
                        <h2>Hello, My Name is xyz</h2><br />
                        <h4>I am an Model & Actor.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in. Accusantium fugiat, dolorem officia exercitationem reprehenderit, maxime ipsum minima facere rerum expedita quaerat sequi commodi excepturi recusandae eligendi, nobis iste?</p>
                        <Link to='' className='btn btn-outline-primary'>Learn about me</Link>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-item-center p-5 location">
                    <div className="col-md-12">
                        <h2 className="text-center">My <span className='live'>Live</span> Location</h2>
                    </div>
                    <div className="col-md-5 p-2">

                    </div>
                    <div className="col-md-5 right p-4">
                        <h2>Head Office:</h2>
                        <p>25 first street, 2nd floor</p>
                        <p>New Delhi, India</p>
                        <p>201001</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">Our Projects</h2>
                        <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure distinctio exercitationem est quo, maiores ducimus culpa sed temporibus incidunt vero possimus accusantium nobis quas commodi fugiat et blanditiis voluptas minus.</p>
                    </div>
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
                                <img src={latestProject} alt="latest project" className='latest'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-3"></div>
                            <div className="col-md-3"></div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center align-item-center p-2">
                                <Link to='' className='btn btn-outline-primary'>View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-item-center p-2">
                    <div className="col-md-5">
                        <h2>Actor</h2>
                        <div className="card p-2">
                            <div className="header">
                                <h3 className='text-muted'>Alia Bhatt</h3>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo explicabo nesciunt aut laborum. Inventore, distinctio? Ipsa eius voluptatibus odio eaque possimus neque provident natus distinctio quaerat, laboriosam accusamus iusto.</p>
                                <Link to='' className='btn btn-outline-primary'>View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5"></div>
                    <div className="col-md-10 p-2">
                        <div className='d-flex justify-content-end align-item-center p-2'>
                            <Link to=''>View All</Link>
                        </div>
                        <div className="wrapper">
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-end align-item-end p-2">
                    <div className="col-md-6">
                        <h2 className='text-end pe-4'>Singer</h2>
                        <h3 className='text-end pe-4'>Jubain</h3>
                        <p className='text-end text-wrap det'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur est facere ipsa. Eveniet ut nam molestias, odit ab odio. Exercitationem incidunt esse commodi corporis aperiam obcaecati ex error odit!</p>
                        <div className='d-flex justify-content-end pe-4'>
                            <Link to='' className='btn btn-outline-primary'>View More</Link>
                        </div>
                    </div>
                    <div className="col-md-12 p-2">
                        <div className='d-flex justify-content-end align-item-center p-2'>
                            <Link to=''>View All</Link>
                        </div>
                        <div className="wrapper">
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <h4 className="text-center">AMANDA PETERSON</h4>
                                        <p className="text-center">Model</p>
                                        <p className="text-center">Age:30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home

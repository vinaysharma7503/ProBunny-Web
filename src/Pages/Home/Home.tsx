import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Widgets/Footer/Footer'
import Header from '../../Widgets/Header/Header'
import slider1 from '../../assets/slider/TOCSIN.jpg'
import slider2 from '../../assets/slider/BilliAkh.jpg'
import slider3 from '../../assets/slider/BilliAkh.jpg'
import bunny from '../../assets/user/bunny.jpeg'
import sanjay from '../../assets/user/sanjay.jpeg'
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
                        <h4>I am an Casting Director.</h4>
                        <p>Bunny is Renowned in Casting Director and production in Bollywood, Delhi NCR, Mumbai fashion industry.He started his journey from Delhi Ncr.</p>
                        <p>He is very talented in field of casting and any types of production.</p>
                        <Link to='/comingsoon' className='btn btn-outline-primary'>Learn about me</Link>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center align-item-center p-2">
                        <img src={bunny} className='profile'/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-item-center p-5">
                    <div className="col-md-5 p-2">
                    <img src={sanjay} className='profile'/>
                    </div>
                    <div className="col-md-5">
                        <h2>Hello, My Name is Sanjay Gera.</h2><br />
                        <h4>I am an Film Producer.</h4>
                        <p>I am Bollywood Producer and working with Bunny and his team in my upcoming projects.</p>
                        <Link to='/comingsoon' className='btn btn-outline-primary'>Learn about me</Link>
                    </div>
                </div>
                {/* <div className="row d-flex justify-content-center align-item-center p-5 location">
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
                </div> */}
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">Our Clients</h2>
                    </div>
                    <div className="col-md-12">
                        <div className="row d-flex justify-content-center align-item-center">
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home

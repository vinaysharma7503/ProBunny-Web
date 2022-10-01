import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Widgets/Footer/Footer'
import Header from '../../Widgets/Header/Header'
import './Home.scss'

interface Props {

}

const Home = (props: Props) => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row header-container d-flex justify-content-center align-item-center p-5">
                    <div className="col-md-5 p-2">
                        <h2>Hello, My Name is Bunny Singhal</h2><br />
                        <h4>I am a Actor.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in. Accusantium fugiat, dolorem officia exercitationem reprehenderit, maxime ipsum minima facere rerum expedita quaerat sequi commodi excepturi recusandae eligendi, nobis iste?</p>
                        <Link to='' className='btn btn-outline-primary'>Learn about me</Link>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className="row d-flex justify-content-center align-item-center p-5">
                    <div className="col-md-5 p-2">

                    </div>
                    <div className="col-md-5">
                        <h2>Hello, My Name is Bunny Singhal</h2><br />
                        <h4>I am a Actor.</h4>
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
                        <div className="row d-flex justify-content-center align-item-center p-2">
                            <div className="col-md-5">
                                <h4>Robot 2.0</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure distinctio exercitationem est quo, maiores ducimus culpa sed temporibus incidunt vero possimus accusantium nobis quas commodi fugiat et blanditiis voluptas minus.</p>
                                <Link to='' className='btn btn-outline-primary'>Watch Now</Link>
                            </div>
                            <div className="col-md-5"></div>
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
            </div>
            <Footer />
        </>
    )
}

export default Home

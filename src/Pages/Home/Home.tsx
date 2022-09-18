import React from 'react'
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
                        <h2>Hello, My Name is Bunny Single</h2><br />
                        <h4>I am a Actor.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in. Accusantium fugiat, dolorem officia exercitationem reprehenderit, maxime ipsum minima facere rerum expedita quaerat sequi commodi excepturi recusandae eligendi, nobis iste?</p>
                        <button className='btn btn-outline-primary'>Learn about me</button>
                    </div>
                    <div className="col-md-5"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home

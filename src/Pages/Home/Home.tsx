import React from 'react'
import Footer from '../../Widgets/Footer/Footer'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <p>Home screen</p>
            </div>
        </div>
           <Footer/>
        </>
    )
}

export default Home

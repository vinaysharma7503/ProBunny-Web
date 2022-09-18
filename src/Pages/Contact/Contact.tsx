import React from 'react'
import Footer from '../../Widgets/Footer/Footer'
import Header from '../../Widgets/Header/Header'
import contactImage from '../../assets/contactus.jpg'

type Props = {}

const Contact = (props: Props) => {
    return (
        <>
            <Header />
            <div className='conatiner-fluid'>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-item-center">
                        <img src={contactImage} alt="contactus" width={'100%'}/>
                    </div>
                    <div className="col-md-6">
                        <h3 className='text-center mt-2'>Contact Us</h3>
                        <form className='p-2'>
                            <div className="form-group row">
                                <div className="form-group-wraper col">
                                    <label>First Name*</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        name="fname"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div className="form-group-wraper col">
                                    <label>Last Name*</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        name="lname"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="mb-3 form-group-wraper col">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3 form-group-wraper col">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="subject"/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows={10}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
import React from 'react'
import Footer from '../../Widgets/Footer/Footer'
import Header from '../../Widgets/Header/Header'

type Props = {}

const Registration = (props: Props) => {
    return (
        <>
        <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-item-center p-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 border p-2">
                                        <h3 className="text-center">
                                            Submit Your Profile
                                        </h3>
                                    </div>
                                    <div className="col-md-12 pt-2">
                                        <form
                                            action="#"
                                            autoComplete="off"
                                            className="p-2"
                                        >
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
                                                <div className="form-group-wraper col">
                                                    <label>Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        placeholder="Enter your Email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>CATEGORY</label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="Society/Apartment">
                                                            Actor
                                                        </option>
                                                        <option value="Office">Model</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>ENTER YOUR MOBILE NUMBER</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="detail"
                                                        placeholder="Enter your mobile number"
                                                        minLength={8}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>ENTER YOUR AGE</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="age"
                                                        placeholder="Enter your age"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>ENTER YOUR EXPERIENCE</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="experience"
                                                        placeholder="Enter your experience"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>ENTER YOUR LOCATION</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="location"
                                                        placeholder="Enter your location"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>Address</label>
                                                    <textarea
                                                        className="form-control"
                                                        name="address"
                                                        placeholder="Enter your address here"
                                                        rows={2}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>UPLOAD YOUR IMAGES</label><br />
                                                    <input type='file' multiple />
                                                </div>
                                            </div>
                                            <div className="pt-2 d-flex align-items-center justify-content-center w-100">
                                                <button
                                                    type="submit"
                                                    className="btn btn-outline-primary btn-lg w-100"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 border"></div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Registration
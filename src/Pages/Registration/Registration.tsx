import React, { useState } from 'react'
import Footer from '../../Widgets/Footer/Footer'
import Header from '../../Widgets/Header/Header'
import { RegistrationData } from './Services/registrationService'

type Props = {}

const Registration = (props: Props) => {
    const [registration = {
        firstName: '',
        lastName: '',
        category: 'Actor' || '',
        email: '',
        mobile: '',
        maritialStatus: '',
        aadharPanNumber: '',
        gender: 'MALE' || '',
        age: '',
        height: '',
        vitals: '',
        nationality: '',
        shoeSize: '',
        skinTone: '',
        eyeColor: '',
        hairColor: '',
        experience: '',
        tattooOnBody: '',
        validPassport: 'true' || '',
        travelAnywhere: 'true' || '',
        anyAllergy: 'true' || '',
        anyStretch: 'true' || '',
        extraSpeciality: '',
        location: '',
        address: ''
    }, setRegistration] = useState<any>()

    const OnSubmit = (event: any) => {
        event.preventDefault();
        console.log('value', registration);
        RegistrationData(registration, registrationResult)
    }

    const registrationResult = (result: any) => {
        console.log("result", result);
        if (result.status === 201) {
            setRegistration({
                firstName: '',
                lastName: '',
                category: 'Actor' || '',
                email: '',
                mobile: '',
                maritialStatus: '',
                aadharPanNumber: '',
                gender: 'MALE' || '',
                age: '',
                height: '',
                vitals: '',
                nationality: '',
                shoeSize: '',
                skinTone: '',
                eyeColor: '',
                hairColor: '',
                experience: '',
                tattooOnBody: '',
                validPassport: 'true' || '',
                travelAnywhere: 'true' || '',
                anyAllergy: 'true' || '',
                anyStretch: 'true' || '',
                extraSpeciality: '',
                location: '',
                address: ''
            })
            alert('Contact Detail Submitted Successfully.')

        }
    };
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-item-center p-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 p-2">
                                        <h3 className="text-center">
                                            SUBMIT YOUR PROFILE
                                        </h3>
                                    </div>
                                    <div className="col-md-12 pt-2">
                                        <form
                                            action="#"
                                            autoComplete="off"
                                            className="p-2"
                                            onSubmit={OnSubmit}
                                        >
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>FIRST NAME</label>
                                                    <input
                                                        type="name"
                                                        className="form-control"
                                                        name="fname"
                                                        value={registration.firstName}
                                                        placeholder="Enter your first name"
                                                        required
                                                        onChange={(f) => setRegistration({ ...registration, firstName: f.target.value })}
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>LAST NAME</label>
                                                    <input
                                                        type="name"
                                                        className="form-control"
                                                        name="lname"
                                                        placeholder="Enter your last name"
                                                        required
                                                        onChange={(l) => setRegistration({ ...registration, lastName: l.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>EMAIL</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        placeholder="Enter your Email"
                                                        required
                                                        onChange={(e) => setRegistration({ ...registration, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>CATEGORY</label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        value={registration.category}
                                                        onChange={(c) => setRegistration({ ...registration, category: c.target.value })}
                                                    >
                                                        <option value="Actor">
                                                            Actor
                                                        </option>
                                                        <option value="Modal">Model</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR MOBILE NUMBER</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="mobile_number"
                                                        placeholder="Enter your mobile number"
                                                        required
                                                        onChange={(m) => setRegistration({ ...registration, mobile: m.target.value })}
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR MARITIAL STATUS</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="maritial_status"
                                                        placeholder="Enter your maritial status"
                                                        required
                                                        onChange={(ms) => setRegistration({ ...registration, maritialStatus: ms.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>ENTER YOUR AADHAR NUMBER/PAN NUMBER</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="aadhar"
                                                        placeholder="Enter your aadhar number"
                                                        minLength={8}
                                                        required
                                                        onChange={(ap) => setRegistration({ ...registration, aadharPanNumber: ap.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>GENDER</label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" defaultChecked onChange={() => setRegistration({ ...registration, gender: 'MALE' })} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        MALE
                                                    </label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault3" onChange={() => setRegistration({ ...registration, gender: 'FEMALE' })} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                        FEMALE
                                                    </label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" onChange={() => setRegistration({ ...registration, gender: 'OTHER' })} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        OTHER
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR AGE</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="age"
                                                        placeholder="Enter your age"
                                                        required
                                                        onChange={(a) => setRegistration({ ...registration, age: a.target.value })}
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR HEIGHT</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="height"
                                                        placeholder="Enter your height"
                                                        required
                                                        onChange={(h) => setRegistration({ ...registration, height: h.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR VITALS</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="vitals"
                                                        placeholder="Enter your vitals"
                                                        required
                                                        onChange={(vi) => setRegistration({ ...registration, vitals: vi.target.value })}
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR NATIONALITY</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="nationality"
                                                        placeholder="Enter your nationality"
                                                        required
                                                        onChange={(n) => setRegistration({ ...registration, nationality: n.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR SHOE SIZE</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="shoe_size"
                                                        placeholder="Enter your shoe size"
                                                        required
                                                        onChange={(so) => setRegistration({ ...registration, shoeSize: so.target.value })}
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR SKIN TONE</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="skin_tone"
                                                        placeholder="Enter your skin tone"
                                                        required
                                                        onChange={(st) => setRegistration({ ...registration, skinTone: st.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR EYE COLOR</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="eye_color"
                                                        placeholder="Enter your eye color"
                                                        required
                                                        onChange={(ec) => setRegistration({ ...registration, eyeColor: ec.target.value })}
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR HAIR COLOR</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="hair_color"
                                                        placeholder="Enter your hair color"
                                                        required
                                                        onChange={(hc) => setRegistration({ ...registration, hairColor: hc.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR EXPERIENCE</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="experience"
                                                        placeholder="Enter your experience"
                                                        required
                                                        onChange={(ex) => setRegistration({ ...registration, experience: ex.target.value })}
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>TATTOO ON BODY</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="tattoo"
                                                        placeholder="Enter your tattoo detail"
                                                        required
                                                        onChange={(tat) => setRegistration({ ...registration, tattooOnBody: tat.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>VAILD PASSPORT:</label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="passport" id="flexRadioDefault4" defaultChecked onChange={() => setRegistration({ ...registration, validPassport: true })}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                        YES
                                                    </label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="passport" id="flexRadioDefault5" onChange={() => setRegistration({ ...registration, validPassport: false })}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                        NO
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>WILLING TO TRAVEL ANYWHERE FOR SHOOT WORLD WIDE:</label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="travel" id="flexRadioDefault6" defaultChecked onChange={() => setRegistration({ ...registration, travelAnywhere: true })}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault6">
                                                        YES
                                                    </label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="travel" id="flexRadioDefault7" onChange={() => setRegistration({ ...registration, travelAnywhere: false })}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault7">
                                                        NO
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>ANY ALLERGY TO DUST OR COSMETICS:</label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="dust" id="flexRadioDefault8" defaultChecked onChange={() => setRegistration({ ...registration, anyAllergy: true })}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault8">
                                                        YES
                                                    </label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="dust" id="flexRadioDefault9" onChange={() => setRegistration({ ...registration, anyAllergy: false })}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault9">
                                                        NO
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>ANY STRETCH MARKS/INJURY SCARS:</label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="scars" id="flexRadioDefault10" defaultChecked onChange={() => setRegistration({ ...registration, anyStretch: true })}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault10">
                                                        YES
                                                    </label>&nbsp;&nbsp;
                                                    <input className="form-check-input" type="radio" name="scars" id="flexRadioDefault11" onChange={() => setRegistration({ ...registration, anyStretch: false })}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault11">
                                                        NO
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-group-wraper">
                                                    <label>EXTRA SPECIALITY</label>
                                                    <textarea
                                                        className="form-control"
                                                        name="extra"
                                                        placeholder="Enter your extra speciality"
                                                        rows={2}
                                                        onChange={(sp) => setRegistration({ ...registration, extraSpeciality: sp.target.value })}
                                                    ></textarea>
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
                                                        onChange={(loc) => setRegistration({ ...registration, location: loc.target.value })}
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
                                                        onChange={(add) => setRegistration({ ...registration, address: add.target.value })}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>UPLOAD YOUR IMAGES</label><br />
                                                    <input type='file' multiple />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>UPLOAD YOUR VIDEO</label><br />
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
            <Footer />
        </>
    )
}

export default Registration
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
        address: '',
        images:'',
        video:''
    }, setRegistration] = useState<any>()

    const OnSubmit = (event: any) => {
        event.preventDefault();
        console.log('value', registration);
        let formData = new FormData()
        formData.append('firstName',registration?.firstName)
        formData.append('lastName',registration?.lastName)
        formData.append('category',registration?.category)
        formData.append('email',registration?.email)
        formData.append('mobile',registration?.mobile)
        formData.append('maritialStatus',registration?.maritialStatus)
        formData.append('aadharPanNumber',registration?.aadharPanNumber)
        formData.append('gender',registration?.gender)
        formData.append('age',registration?.age)
        formData.append('height',registration?.height)
        formData.append('vitals',registration?.vitals)
        formData.append('nationality',registration?.nationality)
        formData.append('shoeSize',registration?.shoeSize)
        formData.append('skinTone',registration?.skinTone)
        formData.append('eyeColor',registration?.eyeColor)
        formData.append('hairColor',registration?.hairColor)
        formData.append('experience',registration?.experience)
        formData.append('tattooOnBody',registration?.tattooOnBody)
        formData.append('validPassport',registration?.validPassport)
        formData.append('travelAnywhere',registration?.travelAnywhere)
        formData.append('anyAllergy',registration?.anyAllergy)
        formData.append('anyStretch',registration?.anyStretch)
        formData.append('extraSpeciality',registration?.extraSpeciality)
        formData.append('location',registration?.location)
        formData.append('address',registration?.address)
        for (const file of registration?.images) {
            formData.append('images',file)
        }
        
        formData.append('video',registration?.video[0])
        RegistrationData(formData, registrationResult)
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
                                                        onChange={(f) => setRegistration({ ...registration, firstName: f.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>LAST NAME</label>
                                                    <input
                                                        type="name"
                                                        className="form-control"
                                                        name="lname"
                                                        placeholder="Enter your last name"
                                                        onChange={(l) => setRegistration({ ...registration, lastName: l.target.value })}
                                                        required
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
                                                        onChange={(e) => setRegistration({ ...registration, email: e.target.value })}
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
                                                        value={registration.category}
                                                        onChange={(c) => setRegistration({ ...registration, category: c.target.value })}
                                                    >
                                                        <option value="Actor">
                                                            Actor
                                                        </option>
                                                        <option value="Modal">Model</option>
                                                        <option value="Director">Director</option>
                                                        <option value="Dop">Dop</option>
                                                        <option value="Writer">Writer</option>
                                                        <option value="Executive Producer">Executive Producer</option>
                                                        <option value="Assistant Director">Assistant Director</option>
                                                        <option value="Make-up Artist">Make-up Artist</option>
                                                        <option value="Art Director">Art Director</option>
                                                        <option value="Creative Director">Creative Director</option>
                                                        <option value="Cinematographer">Cinematographer</option>
                                                        <option value="Editor/VFX">Editor/VFX</option>
                                                        <option value="Cameraman/Equiments">Cameraman/Equiments</option>
                                                        <option value="Music Director">Music Director</option>
                                                        <option value="Choreographer">Choreographer</option>
                                                        <option value="Line Producer">Line Producer</option>
                                                        <option value="Costume Designer">Costume Designer</option>
                                                        <option value="Spot Man">Spot Man</option>
                                                        <option value="Caterers">Caterers</option>
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
                                                        onChange={(m) => setRegistration({ ...registration, mobile: m.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR MARITIAL STATUS</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="maritial_status"
                                                        placeholder="Enter your maritial status"
                                                        onChange={(ms) => setRegistration({ ...registration, maritialStatus: ms.target.value })}
                                                        required
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
                                                        onChange={(ap) => setRegistration({ ...registration, aadharPanNumber: ap.target.value })}
                                                        required
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
                                                        onChange={(a) => setRegistration({ ...registration, age: a.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR HEIGHT</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="height"
                                                        placeholder="Enter your height"
                                                        onChange={(h) => setRegistration({ ...registration, height: h.target.value })}
                                                        required
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
                                                        onChange={(vi) => setRegistration({ ...registration, vitals: vi.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR NATIONALITY</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="nationality"
                                                        placeholder="Enter your nationality"
                                                        onChange={(n) => setRegistration({ ...registration, nationality: n.target.value })}
                                                        required
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
                                                        onChange={(so) => setRegistration({ ...registration, shoeSize: so.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR SKIN TONE</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="skin_tone"
                                                        placeholder="Enter your skin tone"
                                                        onChange={(st) => setRegistration({ ...registration, skinTone: st.target.value })}
                                                        required
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
                                                        onChange={(ec) => setRegistration({ ...registration, eyeColor: ec.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>ENTER YOUR HAIR COLOR</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="hair_color"
                                                        placeholder="Enter your hair color"
                                                        onChange={(hc) => setRegistration({ ...registration, hairColor: hc.target.value })}
                                                        required
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
                                                        onChange={(ex) => setRegistration({ ...registration, experience: ex.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>TATTOO ON BODY</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="tattoo"
                                                        placeholder="Enter your tattoo detail"
                                                        onChange={(tat) => setRegistration({ ...registration, tattooOnBody: tat.target.value })}
                                                        required
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
                                                        required
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
                                                        onChange={(loc) => setRegistration({ ...registration, location: loc.target.value })}
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
                                                        onChange={(add) => setRegistration({ ...registration, address: add.target.value })}
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-group-wraper col">
                                                    <label>UPLOAD YOUR IMAGES</label><br />
                                                    <input type='file' multiple onChange={(im)=>{setRegistration({ ...registration, images: im.target.files })}} />
                                                </div>
                                                <div className="form-group-wraper col">
                                                    <label>UPLOAD YOUR VIDEO</label><br />
                                                    <input type='file' onChange={(v)=>{setRegistration({ ...registration, video: v.target.files })}} />
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
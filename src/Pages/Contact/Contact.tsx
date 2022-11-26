import React,{useState} from 'react'
import Footer from '../../Widgets/Footer/Footer'
import Header from '../../Widgets/Header/Header'
import contactImage from '../../assets/contactus.jpg'
import { ContactData } from "./Services/contactService";
import './Contact.scss'

type Props = {}

const Contact = (props: Props) => {
const [contact={firstName:'',lastName:'',email:'',subject:'',message:''}, setContact] = useState<any>()
const OnSubmit = (event:any)=>{
    event.preventDefault();
    console.log('value',contact);
    ContactData(contact,contactResult)
  }

  const contactResult = (result: any) => {
    console.log("result", result);
    if (result.status===200) {
      setContact({firstName:'',lastName:'',email:'',subject:'',message:''})
      alert('Contact Detail Submitted Successfully.')
    
    }
  };

    return (
        <>
            <Header />
            <div className='conatiner-fluid contact'>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-item-center">
                        <img src={contactImage} alt="contactus" width={'100%'}/>
                    </div>
                    <div className="col-md-6">
                        <h3 className='text-center mt-2'>Contact Us</h3>
                        <form className='p-2' onSubmit={OnSubmit} autoComplete="off">
                            <div className="form-group row">
                                <div className="form-group-wraper col">
                                    <label>First Name*</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        name="fname"
                                        value={contact.firstName}
                                        placeholder="Enter your first name"
                                        required
                                        onChange={(f)=>setContact({...contact,firstName:f.target.value})}
                                    />
                                </div>
                                <div className="form-group-wraper col">
                                    <label>Last Name*</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        name="lname"
                                        value={contact.lastName}
                                        placeholder="Enter your last name"
                                        required
                                        onChange={(l)=>setContact({...contact,lastName:l.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="mb-3 form-group-wraper col">
                                    <label htmlFor="email" className="form-label">Email address*</label>
                                    <input type="email" className="form-control" id="email"
                                     aria-describedby="emailHelp"
                                      placeholder='Enter your email'
                                      value={contact.email}
                                       required
                                       onChange={(e)=>setContact({...contact,email:e.target.value})}/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3 form-group-wraper col">
                                    <label htmlFor="subject" className="form-label">Subject*</label>
                                    <input type="text" className="form-control" id="subject" value={contact.subject} placeholder='Enter your subject' required onChange={(s)=>setContact({...contact,subject:s.target.value})}/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message*</label>
                                <textarea className="form-control" id="message" rows={10} value={contact.message} placeholder='Enter your message' required onChange={(m)=>setContact({...contact,message:m.target.value})}></textarea>
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


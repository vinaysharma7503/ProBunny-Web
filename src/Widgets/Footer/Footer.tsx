import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/user/logo.png'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="container-fluid p-0 footer">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#3e4551" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <Link className="navbar-brand" to="/"><img src={logo} alt="" className='logo' /><span className='name'>ProBunnyProduction</span></Link>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae modi cum ipsam ad, illo possimus laborum ut
                  reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                  Reiciendis assumenda iusto sapiente inventore animi?
                </p>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/" className="text-white">Home</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">About Us</Link>
                  </li>
                  <li>
                    <Link to="/projects" className="text-white">Projects</Link>
                  </li>
                  <li>
                    <Link to="/registration" className="text-white">Registration</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-white">ConatctUs</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Work With</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/comingsoon" className="text-white">Actor</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Singer</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Dancer</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Voice Artist</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Model</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Production Team</h5>

                <ul className="list-unstyled mb-0">
                <li>
                    <Link to="/comingsoon" className="text-white">Costume Designer</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Fashion Designer</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Art Designer</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Makeup Artist</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Camera Equipments</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Farm Houses</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Event Origaniser</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Other Links</h5>

                <ul className="list-unstyled mb-0">
                <li>
                    <Link to="/comingsoon" className="text-white">Directors</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Producers</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Assistant Directors</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Executive Director</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon" className="text-white">Production Head</Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* <hr className="mb-4" /> */}

          {/* <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <button type="button" className="btn btn-outline-light btn-rounded">
                Sign up!
              </button>
            </p>
          </section> */}

          {/* <hr className="mb-4" /> */}

          <section className="mb-4 text-center">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-facebook-f"></i
            ></a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-twitter"></i
            ></a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-google"></i
            ></a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-instagram"></i
            ></a>

            {/* <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-linkedin-in"></i
            ></a> */}

            {/* <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-github"></i
            ></a> */}
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
        >
          © 2015-{new Date().getFullYear()} Copyright. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
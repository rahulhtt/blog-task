import React from 'react'
import '../App.css'
import './register.css'
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import useLoginForm from '../Forms/loginForm';
const Login = () => {

    const { formik, squareCheckboxSolidChecked, setSquareCheckboxSolidChecked } = useLoginForm()

    return (
        <>
            <ToastContainer />
            <div className='root-frame'>
                <div className="child-vector-a">
                    <div className="main-frame-b">
                        <div className="inner-frame-c">
                            <img className="union-icon" loading="eager" alt="" src="./images/union.svg" />
                            <div className="oasis">Oasis.</div>
                        </div>
                    </div>
                    <div className="outer-frame-d">
                        <div className="group-cluster">
                            <div className="text-passage">
                                <div className="vincent-o-b-i-text">
                                    <img
                                        className="group-icon"
                                        loading="eager"
                                        alt=""
                                        src="/group.svg"
                                    />
                                </div>
                            </div>
                            <div className="back-button-frame">
                                <div className="step-frame">
                                    <div className="info-frame">
                                        <h1 className="h1">“</h1>
                                        <div className="the-passage-experienced">
                                            The passage experienced a surge in popularity during the 1960s
                                            when Letraset used it on their dry-transfer sheets, and again
                                            during the 90s as desktop publishers bundled the text with
                                            their software.
                                        </div>
                                    </div>
                                    <div className="vincent-obi-text">
                                        <div className="vincent-obi">Vincent Obi</div>
                                        <img
                                            className="circle-check-full"
                                            loading="eager"
                                            alt=""
                                            src="./images/img_circlecheckfull.svg"
                                        />
                                    </div>
                                </div>
                                <img
                                    className="vector-path-a"
                                    loading="eager"
                                    alt=""
                                    src="/vector-1.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="new-frame-e">
                        <img
                            className="vector-origin-icon"
                            loading="eager"
                            alt=""
                            src="./images/img_vector.png"
                        />
                    </div>
                </div>
                <div className="frame-container">
                    <div className="back-button">
                        <img
                            className="iconnavigationarrow-back-ios"
                            loading="eager"
                            alt=""
                            src="/images/img_arrowleft.svg"
                        />
                        <div className="back">Back</div>
                    </div>
                    <div className="personal-info-input">
                        <div className="personal-data-frame">
                            <div className="step-0103">STEP 01/03</div>
                            <div className="personal-info">Personal Info.</div>
                        </div>
                        <form onSubmit={formik.handleSubmit} action='#' className="register-individual-account">
                            <div className="fullname-and-email">
                                <div className="industry-regulation-input">
                                    <h2 className="register-individual-account1">
                                        Login Your Account!
                                    </h2>
                                    <div className="line-separator-frame">
                                        <div className="for-the-purpose">
                                            For login, your details are
                                            required.
                                        </div>
                                    </div>

                                    <div className="google-login-button" />
                                </div>

                                <div className="yourfullname-frame">

                                    <div className="input-email-password1">
                                        <div className="email-address">Email address*</div>
                                        <div className="rectangle-parent">
                                            <div className="frame-child" />
                                            <input
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                className="enter-email-address"
                                                placeholder="Enter email address"
                                                type="email"
                                                id='email'
                                            />
                                        </div>
                                        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                                    </div>
                                    <div className="input-email-password1">
                                        <div className="email-address">Enter Password</div>
                                        <div className="rectangle-parent">
                                            <div className="frame-child" />
                                            <input
                                                id='password'
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="enter-email-address"
                                                placeholder="Enter password"
                                                type="password"
                                            />
                                        </div>
                                        {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                                    </div>
                                    <div className="or-connection">
                                        <input
                                            className="square-checkbox-solid"
                                            checked={squareCheckboxSolidChecked}
                                            type="checkbox"
                                            onChange={(event) =>
                                                setSquareCheckboxSolidChecked(event.target.checked)
                                            }
                                        />
                                        <div className="i-agree-to">{`I agree to terms & conditions`}</div>
                                    </div>
                                </div>
                                <button type='submit' className="input-field-row">
                                    <div className="input-field-row-child" />
                                    <div className="register-account"> Account</div>
                                </button>

                                <div className="back-navigation-button">
                                    <div className="step-label" />
                                    <div className="or">Or</div>
                                    <div className="step-label1" />
                                </div>
                                <Link to="/register" className="google-icon">
                                    <div className="google-icon-child" />
                                    <div className="register-with-google">Create An Account</div>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login

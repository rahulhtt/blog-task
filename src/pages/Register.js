import React from 'react'
// import '../App.css'
// import './register.css'
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import useRegisterForm from '../Forms/registerForm';

const Register = () => {

    const { formik, CheckboxChecked, setCheckboxChecked } = useRegisterForm()

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
                            className="arrow-back-icon"
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
                                        Register Individual Account!
                                    </h2>
                                    <div className="line-separator-frame">
                                        <div className="for-the-purpose">
                                            For the purpose of industry regulation, your details are
                                            required.
                                        </div>
                                    </div>

                                    <div className="google-login-button" />
                                </div>
                                <div className="yourfullname-frame">
                                    <div className="input-email-password">
                                        <label className="your-fullname">Your fullname*</label>
                                        <div className="rectangle-parent">
                                            <div className="frame-child" />
                                            <input
                                                id='name'
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="name-input"
                                                placeholder="Enter Name"
                                                type="text"
                                            />
                                        </div>
                                        {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                                    </div>
                                    <div className="input-email-password1">
                                        <div className="email-address">Email address*</div>
                                        <div className="rectangle-parent">
                                            <div className="frame-child" />
                                            <input
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                className="name-input"
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
                                                className="name-input"
                                                placeholder="Enter password"
                                                type="password"
                                            />
                                        </div>
                                        {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                                    </div>

                                    <div className="or-connection">
                                        <input
                                            className="square-checkbox-solid"
                                            checked={CheckboxChecked}
                                            type="checkbox"
                                            onChange={(event) =>
                                                setCheckboxChecked(event.target.checked)
                                            }
                                        />
                                        <div className="i-agree-to">{`I agree to terms & conditions`}</div>
                                    </div>
                                </div>
                                <button type='submit' className="input-field-row">
                                    <div className="input-field-row-child" />
                                    <div className="register-account">Register Account</div>
                                </button>

                                <div className="back-navigation-button">
                                    <div className="step-label" />
                                    <div className="or">Or</div>
                                    <div className="step-label1" />
                                </div>
                                <Link to="/" className="google-icon">


                                    <div className="register-with-google">Login Your Account</div>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            {/* <div class='root-frame'>
                <div class="child-vector-a">
                    <div class="main-frame-b">
                        <div class="inner-frame-c">
                            <img class="union-icon" loading="eager" alt="" src="./images/union.svg" />
                            <div class="oasis">Oasis.</div>
                        </div>
                    </div>
                    <div class="outer-frame-d">
                        <div class="group-cluster">
                            <div class="text-passage">
                                <div class="vincent-o-b-i-text">
                                    <img class="group-icon" loading="eager" alt="" src="/group.svg" />
                                </div>
                            </div>
                            <div class="back-button-frame">
                                <div class="step-frame">
                                    <div class="info-frame">
                                        <h1 class="h1">“</h1>
                                        <div class="the-passage-experienced">
                                            The passage experienced a surge in popularity during the 1960s
                                            when Letraset used it on their dry-transfer sheets, and again
                                            during the 90s as desktop publishers bundled the text with
                                            their software.
                                        </div>
                                    </div>
                                    <div class="vincent-obi-text">
                                        <div class="vincent-obi">Vincent Obi</div>
                                        <img class="circle-check-full" loading="eager" alt="" src="./images/img_circlecheckfull.svg" />
                                    </div>
                                </div>
                                <img class="vector-path-a" loading="eager" alt="" src="/vector-1.svg" />
                            </div>
                        </div>
                    </div>
                    <div class="new-frame-e">
                        <img class="vector-origin-icon" loading="eager" alt="" src="./images/img_vector.png" />
                    </div>
                </div>
                <div class="frame-container">
                    <div class="back-button">
                        <img class="arrow-back-icon" loading="eager" alt="" src="/images/img_arrowleft.svg" />
                        <div class="back">Back</div>
                    </div>
                    <div class="personal-info-input">
                        <div class="personal-data-frame">
                            <div class="step-0103">STEP 01/03</div>
                            <div class="personal-info">Personal Info.</div>
                        </div>
                        <form onSubmit={formik.handleSubmit} action='#' class="register-individual-account">
                            <div class="fullname-and-email">
                                <div class="industry-regulation-input">
                                    <h2 class="register-individual-account1">Register Individual Account!</h2>
                                    <div class="line-separator-frame">
                                        <div class="for-the-purpose">For the purpose of industry regulation, your details are required.</div>
                                    </div>
                                    <div class="google-login-button" />
                                </div>
                                <div class="yourfullname-frame">
                                    <div class="input-email-password">
                                        <label class="your-fullname">Your fullname*</label>
                                        <div class="rectangle-parent">
                                            <div class="frame-child" />
                                            <input id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} class="name-input" placeholder="Enter Name" type="text" />
                                        </div>
                                        {formik.touched.name && formik.errors.name ? <div class='error'>{formik.errors.name}</div> : null}
                                    </div>
                                    <div class="input-email-password1">
                                        <div class="email-address">Email address*</div>
                                        <div class="rectangle-parent">
                                            <div class="frame-child" />
                                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} class="name-input" placeholder="Enter email address" type="email" id='email' />
                                        </div>
                                        {formik.touched.email && formik.errors.email ? <div class='error'>{formik.errors.email}</div> : null}
                                    </div>
                                    <div class="input-email-password1">
                                        <div class="email-address">Enter Password</div>
                                        <div class="rectangle-parent">
                                            <div class="frame-child" />
                                            <input id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} class="name-input" placeholder="Enter password" type="password" />
                                        </div>
                                        {formik.touched.password && formik.errors.password ? <div class='error'>{formik.errors.password}</div> : null}
                                    </div>
                                    <div class="or-connection">
                                        <input class="square-checkbox-solid" checked={squareCheckboxSolidChecked} type="checkbox" onChange={(event) => setSquareCheckboxSolidChecked(event.target.checked)} />
                                        <div class="i-agree-to">{`I agree to terms & conditions`}</div>
                                    </div>
                                </div>
                                <button type='submit' class="input-field-row">
                                    <div class="input-field-row-child" />
                                    <div class="register-account">Register Account</div>
                                </button>
                                <div class="back-navigation-button">
                                    <div class="step-label" />
                                    <div class="or">Or</div>
                                    <div class="step-label1" />
                                </div>
                                <Link to="/" class="google-icon">
                                    <div class="register-with-google">Login Your Account</div>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div > */}
        </>
    )
}

export default Register

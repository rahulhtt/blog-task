import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import useAuthentication from '../Auth/useAuthentication';
import { handleApiError, handleAuthenticationError } from '../Errors/errorHandler';
import { fetchBlogbyId, updateBlogById } from '../Api/blogApi';

const BlogEdit = () => {

    const { id } = useParams()
    const [Loader, setLoader] = useState(false)
    const [blogDetails, setBlogDetails] = useState({
        title: "",
        author: "",
        desc: "",
        id: id

    });
    const authToken = useSelector((state) => state.auth.token);
    const isLoggedIn = useAuthentication(authToken)
    const navigate = useNavigate();


    //handle Onchange event
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        console.log(blogDetails)
    };

    //fetch the blog details by Id
    const fetchBlogList = async () => {
        if (isLoggedIn) {
            try {
                const data = await fetchBlogbyId(id, authToken);
                setBlogDetails({
                    title: data.title,
                    author: data.author,
                    desc: data.desc
                });
                toast.success('Blog fetched successfully', { position: "top-center", autoClose: 2000 });
            } catch (error) {
                handleApiError(error, navigate)
            }
        } else {
            handleAuthenticationError(navigate)
        }
    };


    //handle editing
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)
        if (isLoggedIn) {
            try {
                const data = await updateBlogById(id, authToken);
                toast.success('Blog updated successfully', { position: "top-center", autoClose: 2000 });
            } catch (error) {
                handleApiError(error, navigate)
            }
        } else {
            handleAuthenticationError(navigate)
        }

    };

    useEffect(() => {
        fetchBlogList()
    }, [])

    return (
        <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            < ToastContainer limit={1} />
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Edit Blog Detail
                    </h2>
                    <form className="space-y-6" >
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                            <div className="mt-1">
                                <input
                                    id='title'
                                    name="title"
                                    type="text"
                                    onChange={handleChange}
                                    value={blogDetails.title}
                                    className="px-2 py-3 mt-1 block w-400 rounded-md border border-gray-300 
                                shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                            {/* {formik.touched.title && formik.errors.title ? <div className='error mt-2'>{formik.errors.title}</div> : null} */}
                        </div>
                        <div>
                            <label htmlFor="Author" className="block text-sm font-medium text-gray-700">Author</label>
                            <div className="mt-1">
                                <input
                                    name="author"
                                    type="text"
                                    id='author'
                                    onChange={handleChange}
                                    value={blogDetails.author}
                                    className="px-2 py-3 mt-1 block w-400 
                                rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                            {/* {formik.touched.author && formik.errors.author ? <div className='error mt-2'>{formik.errors.author}</div> : null} */}
                        </div>
                        <div>
                            <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
                            <div className="mt-1">
                                <textarea name="desc"
                                    onChange={handleChange}
                                    value={blogDetails.desc}
                                    id='desc'
                                    className="px-2 py-3 mt-1 block w-400 rounded-md
                                 border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                            {/* {formik.touched.desc && formik.errors.desc ? <div className='error mt-2'>{formik.errors.desc}</div> : null} */}
                        </div>
                        <div>
                            {Loader ? <button type="submit" className="w-400 text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Updating...
                            </button> : <button type="submit" onClick={handleSubmit} className="w-400 text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Update</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlogEdit

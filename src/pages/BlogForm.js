import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import useAuthentication from '../Auth/useAuthentication';
const BlogForm = () => {

    const authToken = useSelector((state) => state.auth.token);
    const isLoggedIn = useAuthentication(authToken)
    const navigate = useNavigate();

    const initialValues = {
        title: "",
        author: "",
        desc: "",

    }
    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        author: Yup.string().required('Author Name is required'),
        desc: Yup.string().min(20, "Too short").required("Description is required"),
    })



    const onSubmit = async () => {
        if (isLoggedIn) {
            try {
                const response = await axios.post(`http://${process.env.REACT_APP_IP_ADD}:3000/posts`, {
                    title: formik.values.title,
                    author: formik.values.author,
                    desc: formik.values.desc
                }, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },

                });
                const data = response.data;
                console.log(data)
                setTimeout(() => {
                    navigate('/home')
                }, 4000)
                // Show success toast notification
                toast.success('Blog Created successfully', { position: "top-center", autoClose: 2000 });

            } catch (error) {
                if (error.response && error.response.status === 401) {
                    // Token expired, show a message or redirect to login page
                    toast.warning('Session expired. Please log in again.', { position: "top-center" });
                    // You might want to redirect the user to the login page here
                    setTimeout(() => {
                        navigate('/')
                    }, 4000)
                } else {
                    // Show generic error toast notification
                    toast.error('Error to created blog', { position: "top-center", autoClose: 2000 });
                }
            }
        }
        else {

            // Token expired, show a message or redirect to login page
            toast.warning('Session expired. Please log in again.', { position: "top-center" });
            // You might want to redirect the user to the login page here
            setTimeout(() => {
                navigate('/')
            }, 4000)
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

  

    return (
        <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Create a new blog
                    </h2>
                    <form onSubmit={formik.handleSubmit} className="space-y-6" >
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                            <div className="mt-1">
                                <input
                                    id='title'
                                    name="title"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.title}
                                    className="px-2 py-3 mt-1 block w-400 rounded-md border border-gray-300 
                                shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                            {formik.touched.title && formik.errors.title ? <div className='error mt-2'>{formik.errors.title}</div> : null}
                        </div>
                        <div>
                            <label htmlFor="Author" className="block text-sm font-medium text-gray-700">Author</label>
                            <div className="mt-1">
                                <input
                                    name="author"
                                    type="text"
                                    id='author'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.author}
                                    className="px-2 py-3 mt-1 block w-400 
                                rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                            {formik.touched.author && formik.errors.author ? <div className='error mt-2'>{formik.errors.author}</div> : null}
                        </div>
                        <div>
                            <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
                            <div className="mt-1">
                                <textarea name="desc"

                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.desc}
                                    id='desc'
                                    className="px-2 py-3 mt-1 block w-400 rounded-md
                                 border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                            {formik.touched.desc && formik.errors.desc ? <div className='error mt-2'>{formik.errors.desc}</div> : null}
                        </div>
                        <div>
                            <button type="submit" className="flex w-400 justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm 
                            font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    )
}

export default BlogForm

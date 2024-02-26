import React, { useEffect, useState } from 'react'
import "./../styles/blogList.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useAuthentication from '../Auth/useAuthentication';
const BlogList = () => {
    const authToken = useSelector((state) => state.auth.token);
    const isLoggedIn = useAuthentication(authToken)
    const [blogList, setBlogList] = useState([]);
    const navigate = useNavigate();


    //fetch blog list from server
    const fetchBlogList = async () => {
        if (isLoggedIn) {
            try {
                const response = await axios.get(`http://${process.env.REACT_APP_IP_ADD}:3000/posts`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },

                });
                const data = response.data;
                console.log(data)
                setBlogList(data)

                // Show success toast notification
                toast.success('Blog list fetched successfully', { position: "top-center", autoClose: 2000 });

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
                    toast.error('Error fetching blog list', { position: "top-center", autoClose: 2000 });
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

    const handleDelete = async (id) => {
        if (isLoggedIn) {
            try {
                const response = await axios.delete(`http://${process.env.REACT_APP_IP_ADD}:3000/posts/${id}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });

                fetchBlogList()
                // Show success toast notification
                toast.success('Blog Delete successfully', { position: "top-center", autoClose: 2000 });

            } catch (error) {
                if (error.response && error.response.status === 401) {
                    // Token expired, show a message or redirect to login page
                    toast.warning('Session expired. Please log in again.', { position: "top-center" });
                    // You might want to redirect the user to the login page here
                    setTimeout(() => {
                        navigate('/')
                    }, 3000)
                } else {
                    // Show generic error toast notification
                    toast.error('Error deleteing blog ', { position: "top-center", autoClose: 2000 });
                }
            }
        }
        else {

            // Token expired, show a message or redirect to login page
            toast.warning('Session expired. Please log in again.', { position: "top-center" });
            // You might want to redirect the user to the login page here
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }

    }
    const handleBlogClick = (blogId) => {
        navigate(`/editform/${blogId}`);
    };




    useEffect(() => {
        fetchBlogList()
    }, [])

    return (
        <>
            <div>
                {isLoggedIn && (
                    <div>
                        <ToastContainer limit={1} />
                        <div className="flex flex-col px-6 pt-6 pb-12 bg-white max-md:px-5">
                            <div className="flex justify-between items-center mb-4 max-md:max-w-full">
                                <h1 className="text-4xl font-bold text-neutral-800 max-md:max-w-full">Blogs</h1>
                                <Link to="/blogform">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Add Blog +</button>
                                </Link>
                            </div>
                            <div className="shrink-0 mt-4 h-px bg-black bg-opacity-10 max-md:max-w-full" />
                            <div className="px-px mt-4 max-md:max-w-full">
                                <div className=" gap-5 grid grid-cols-4 max-md:grid-cols-2 max-md:gap-2 ">
                                    {blogList.map((blog) => (
                                        <div key={blog.id} className="flex shadow-md p-5 flex-col w-[80%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-neutral-800 max-md:mt-5">
                                                <div className="text-3xl line-clamp-2 whitespace-nowrap">{blog.title}</div>
                                                <div className="mt-4 text-base line-clamp-3 tracking-tight">{blog.desc}</div>

                                                <div className="flex mt-2 gap-5">
                                                    <Link to='#' onClick={() => handleBlogClick(blog.id)} className="px-3 py-2 text-sm text-white bg-green-600 rounded">Edit</Link>
                                                    <button onClick={() => handleDelete(blog.id)} className="px-3 py-2 text-sm text-white bg-red-600 rounded">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>



    )
}

export default BlogList

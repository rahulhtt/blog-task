import React, { useEffect, useState } from 'react'
import "./../styles/blogList.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteBlog, fetchBlogList } from '../Api/blogApi';

import useAuthentication from '../Auth/useAuthentication';
import { handleApiError } from '../Errors/errorHandler';
const BlogList = () => {
    const authToken = useSelector((state) => state.auth.token);
    const isLoggedIn = useAuthentication(authToken)
    const [blogList, setBlogList] = useState([]);
    const navigate = useNavigate();


    //fetch blog list from server
    const fetchBlogListData = async () => {
        if (isLoggedIn) {
            try {
                const data = await fetchBlogList(authToken);
                setBlogList(data);
                toast.success('Blog list fetched successfully', { position: "top-center", autoClose: 2000 });
            } catch (error) {
                handleApiError(error, navigate)
            }
        } else {
            handleLogout();
        }
    };

    const handleDelete = async (id) => {
        if (isLoggedIn) {
            try {
                await deleteBlog(id, authToken);
                fetchBlogListData();
                toast.success('Blog deleted successfully', { position: "top-center", autoClose: 2000 });
            } catch (error) {
                handleApiError(error, navigate)
            }
        } else {
            handleLogout();
        }
    };


    //navigate to edit page
    const handleBlogClick = (blogId) => {
        navigate(`/editform/${blogId}`);
    };

    //logout and redirect to the login page
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        toast.success('Logged out successfully', { position: "top-right ", autoClose: 2000 });
        setTimeout(() => {
            navigate('/');
        }, 3000)
    }

    //fetch the blog list
    useEffect(() => {
        fetchBlogListData()
    }, [])

    return (
        <>
            <div>
                {isLoggedIn && (
                    <div>
                        <ToastContainer limit={1} />
                        <div className="flex flex-col px-6 pt-6 pb-12 bg-white max-md:px-5">
                            <div className="flex justify-between items-center mb-4 max-md:max-w-full">
                                <h1 className="text-4xl  font-bold text-neutral-800 max-md:max-w-full">Blogs</h1>
                                <Link to="/blogform">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Add Blog +</button>
                                </Link>
                                <div className="flex justify-end mb-4 max-md:max-w-full">
                                    <Link to="#" onClick={handleLogout} on className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm ml-1 px-5 py-2.5">Logout</Link>
                                </div>
                            </div>
                            <div className="shrink-0 mt-4 h-px bg-black bg-opacity-10 max-md:max-w-full" />
                            <div className="px-px mt-4 max-md:max-w-full">
                                <div className=" gap-5 grid grid-cols-5 max-md:grid-cols-2 max-md:gap-2 ">
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

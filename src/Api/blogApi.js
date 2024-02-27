
import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = `http://${process.env.REACT_APP_IP_ADD}:3000`;

const fetchBlogList = async (authToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        // Display error toast notification
        toast.error('Error fetching blog list', { position: "top-center", autoClose: 2000 });
        throw error;
    }
};

const fetchBlogbyId = async (id, authToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        // Display error toast notification
        toast.error('Error fetching blog ', { position: "top-center", autoClose: 2000 });
        throw error;
    }
};


const updateBlogById = async (id, blogDetails, authToken) => {
    try {
        const response = await axios.put(`${BASE_URL}/posts/${id}`, blogDetails, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        // Display success toast notification
        toast.success('Blog Updated successfully', { position: "top-center", autoClose: 2000 });
    } catch (error) {
        // Display error toast notification
        toast.error('Error fetching blog ', { position: "top-center", autoClose: 2000 });
        throw error;
    }
};

const deleteBlog = async (id, authToken) => {
    try {
        await axios.delete(`${BASE_URL}/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        // Display success toast notification
        toast.success('Blog deleted successfully', { position: "top-center", autoClose: 2000 });
    } catch (error) {
        // Display error toast notification
        toast.error('Error deleting blog', { position: "top-center", autoClose: 2000 });
        throw error;
    }
};

export { fetchBlogList, deleteBlog, fetchBlogbyId,updateBlogById };


// useLoginForm.js
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setToken } from '../feature/authslice';
 // Assuming you have defined this slice

const useLoginForm = () => {
    const [squareCheckboxSolidChecked, setSquareCheckboxSolidChecked] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const IP_ADD = process.env.REACT_APP_IP_ADD;

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required('Email is required'),
        password: Yup.string().required("Password is required"),
    });

    const onSubmit = async (values) => {
        try {
            const response = await axios.post(`http://${IP_ADD}:3000/login`, {
                email: values.email,
                password: values.password,
            });
            toast.success('Login successful', { position: "bottom-center", autoClose: 2000 });
            const data = response.data;
            const authToken = data.accessToken;
            dispatch(setToken(authToken));
            localStorage.setItem('token', authToken);
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        } catch (error) {
            console.log(error);
            toast.error('Login failed. Please try again.', { position: "bottom-center", autoClose: 2000 });
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return { formik, squareCheckboxSolidChecked, setSquareCheckboxSolidChecked };
};

export default useLoginForm;

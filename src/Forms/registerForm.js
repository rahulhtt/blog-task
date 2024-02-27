
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useRegisterForm = () => {

    const [CheckboxChecked, setCheckboxChecked] = useState(true);
    const navigate = useNavigate();
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email("Invalid email format").required('Email is required'),
        password: Yup.string().required("Password is required"),
    });

    const onSubmit = async (values) => {
        try {
            if (CheckboxChecked) {
                const response = await axios.post(`http://${process.env.REACT_APP_IP_ADD}:3000/register`, {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                });
                toast.success('Register successful', { position: "bottom-center", autoClose: 2000 });
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                toast.warning("Please Agree the Terms and Conditions", { position: "top-center", autoClose: 3000 });
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.warning("Email Already registered", { position: "top-center", autoClose: 3000 });
            }
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return { formik, CheckboxChecked, setCheckboxChecked };
};

export default useRegisterForm;

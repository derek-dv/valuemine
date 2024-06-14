import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify"
import * as yup from "yup";

const useForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log(values);
    axios
      .post("https://val-0rnm.onrender.com/api/auth/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Login successful")
        localStorage.setItem("jwt", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
        console.error(err);
      })
    setUser(true);
    console.log(user);
    setSubmitting(false);
  };

  const userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("*This field is required"),
    password: yup
      .string()
      .min(6, "Password is too short - should be 6 chars minimum")
      .required("*This field is required"),
  });

  return {
    handleFormSubmit,
    userSchema,
    user,
  };
};

export default useForm;

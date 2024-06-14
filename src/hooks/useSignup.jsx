import { useState, useContext } from "react";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContexts";
import { toast } from "react-toastify";

const useSignup = () => {
  //   const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleFormSubmit = (values, { setSubmitting }) => {
    // setUser(true);

    axios
      .post("https://val-0rnm.onrender.com/api/auth/register", {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Registration completed")
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg);
      })
      .finally(() => {
        console.log(values);
        setSubmitting(false);
      });
  };

  const userSchema = yup.object().shape({
    email: yup
      .string()
      .email("please enter a valid id")
      .required("*This field is required"),

    password: yup
      .string()
      .min(6, "password is too short - should be 6 chars minimum")
      .required("*This field is required"),
  });

  return {
    handleFormSubmit,
    userSchema,
  };
};

export default useSignup;

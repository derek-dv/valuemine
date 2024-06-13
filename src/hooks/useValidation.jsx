import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import * as yup from "yup";

export default function useValidation() {

  const initialValues = {
    name: "",
    email: "",
    subject:"",
    message: "",
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const form = useRef();
  //change this...
  const templateId = 'template_yrexn03';
  const handleFormSubmit = (values, {setSubmitting, resetForm}) => {
   console.log("hello")
    emailjs.sendForm('service_9cu25ea', templateId, form.current, '7LBoVUWpvrhg97KQo')
      .then((result) => {
        handleClick()
        resetForm()
      }, (error) => {
        console.log(error.text);
      }); 
  // setSubmitting(false) 
  };


   const userSchema = yup.object().shape({
    name: yup
      .string()
      .required("*This field is required"),
      // .min(15, "name must be not be less than 2 characters"),

    email: yup
      .string()
      .email("please enter a valid email")
      .required("*This field is required"),
    
      subject: yup
      .string()
      .required("*This field is required"),
    
    message: yup
      .string()
      .min(15, "message is too short....")
      .required("*This field is required"),
  });
  
  return {userSchema,handleFormSubmit,initialValues,form,open,handleClose}
  }
  
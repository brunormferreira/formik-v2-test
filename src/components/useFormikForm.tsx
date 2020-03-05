import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().max(16, 'Too big').min(2, 'To small').required('First Name Required'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email().required('E-mail Required')
})

const MyForm: React.FC = () => {
  const { handleSubmit, handleChange, values, errors, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  });
  
  return (
    <form onSubmit={handleSubmit} style={{display: 'inline-grid'}}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
      />
      {errors.firstName && errors.firstName}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
      />
      {errors.lastName && errors.lastName}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {errors.email && errors.email}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
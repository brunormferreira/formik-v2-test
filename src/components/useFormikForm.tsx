import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(16, 'First Name is too big')
    .min(2, 'First Name is too small')
    .required('First Name Required'),
  lastName: Yup.string()
    .max(20, ' Last Name is too big')
    .required('Last Name Required'),
  email: Yup.string()
    .email()
    .required('E-mail Required')
})

const MyForm: React.FC = () => {
  const { handleSubmit, errors, getFieldProps } = useFormik({
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
        name="firstName"
        type="text"
        {...getFieldProps('firstName')}
      />
      {errors.firstName && (<div style={{color: 'red'}}>{errors.firstName}</div>)}
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        type="text"
        {...getFieldProps('lastName')}
      />
      {errors.lastName && (<div style={{color: 'red'}}>{errors.lastName}</div>)}
      <label htmlFor="email">Email Address</label>
      <input
        name="email"
        type="email"
        {...getFieldProps('email')}
      />
      {errors.email && (<div style={{color: 'red'}}>{errors.email}</div>)}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
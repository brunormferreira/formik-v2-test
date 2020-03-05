import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().max(16, 'Too big').min(2, 'To small').required('First Name Required'),
  lastName: Yup.string().max(20, 'Too big').required('Last Name Required'),
  email: Yup.string().email().required('E-mail Required')
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
        {...getFieldProps('firstName')}
      />
      {errors.firstName && errors.firstName}
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        {...getFieldProps('lastName')}
      />
      {errors.lastName && errors.lastName}
      <label htmlFor="email">Email Address</label>
      <input
        name="email"
        {...getFieldProps('email')}
      />
      {errors.email && errors.email}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
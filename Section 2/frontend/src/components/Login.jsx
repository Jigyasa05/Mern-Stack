import React from 'react'
import { useFormik } from 'formik'
import toast from 'react-hot-toast';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email').required('Required'),
  password : Yup.string().min(5,'Too Short!').required('Required')
  .matches(/[0-9]/, 'Number is required')
  .matches(/[a-z]/, 'Lowercase is required')
  .matches(/[A-Z]/, 'Uppercase is required')
  .matches(/[^\w]/, 'Special character is required'),
 
});

const Login = () => {
  const LoginForm = useFormik({
    initialValues:{
     
      email:'',
      password:'',
     
    },
    onSubmit:(values)=>{
     // alert(values);
      console.log(values);
    //  resetForm();// this is reset form
    toast.success('Form submitted Successfully');
    },
    validationSchema: SignupSchema
  });
  
 return (
    <div>
      <form onSubmit={LoginForm.handleSubmit}>
  {/* Email input */}
  <div data-mdb-input-init="" className=" mb-4">
    <input type="email" id="form1Example1" className="form-control" />
    <label className="form-label" htmlFor="form1Example1">
      Email address
    </label>
  </div>
  {/* Password input */}
  <div data-mdb-input-init="" className="form-outline mb-4">
    <input type="password" id="form1Example2" className="form-control" />
    <label className="form-label" htmlFor="form1Example2">
      Password
    </label>
  </div>
  {/* 2 column grid layout for inline styling */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* Checkbox */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="form1Example3"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="form1Example3">
          {" "}
          Remember me{" "}
        </label>
      </div>
    </div>
    <div className="col">
      {/* Simple link */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  {/* Submit button */}
  <button
    data-mdb-ripple-init=""
    type="submit"
    className="btn btn-primary btn-block"
  >
    Sign in
  </button>
</form>

    </div>
  )
}

export default Login
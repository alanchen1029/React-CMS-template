import React, { useState } from "react";
import { useFormik, FormikErrors } from 'formik';

import { history } from "../../_helpers";
import EyeOpen from "../../assets/images/eye-open-bk.svg";
import EyeClose from "../../assets/images/eye-slash-bk.svg";

interface FormValues
{
  email: string;
  password: string;
  passwordConfirmation: string;
}

function validateSignupForm(values: FormValues)
{
  const errors: FormikErrors<FormValues> = {};
  if (!values.email)
  {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
  {
    errors.email = 'Invalid email address';
  }
  if (!values.password || !values.passwordConfirmation)
  {
    if (!values.password)
      errors.password = 'Password Required';
    if (!values.passwordConfirmation)
      errors.passwordConfirmation = 'Password Confirm Required';
  } else
  {
    if (values.password !== values.passwordConfirmation)
    {
      errors.passwordConfirmation = 'Password does not match';
    }
  }
  return errors;
}

const RegisterTab = (): JSX.Element =>
{
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validate: (values: FormValues) => validateSignupForm(values),
    onSubmit: values =>
    {
      alert(JSON.stringify(values, null, 2));
      registerAccount()
    },
  });
  function registerAccount()
  {
    // api request 
    setTimeout(() =>
    {
      history.push("/list-1");
    }, 500);
  }

  return (
    <div className="login-wrapper">
      <div className="header">Sign UP</div>
      <div className="sub-header">Welcome To XXX</div>
      <div className="form-wrapper">
        <form onSubmit={formik.handleSubmit}>
          <div className="input">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && <div className="from-error-msg">{formik.errors.email}</div>}
          </div>
          <div className="input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password &&
              <div className="from-error-msg">{formik.errors.password}</div>}
            <div className="eye-icons" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <img src={EyeClose} /> : <img src={EyeOpen} />}
            </div>
          </div>
          <div className="input">
            <input
              type={showPassword ? "text" : "password"}
              name="passwordConfirmation"
              placeholder="Password"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
            />
            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && <div className="from-error-msg">{formik.errors.passwordConfirmation}</div>}
            <div className="eye-icons" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <img src={EyeClose} /> : <img src={EyeOpen} />}
            </div>
          </div>
          <div className="actions-wrapper">
            <button type="submit" className="align-right" disabled={formik.isSubmitting}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { RegisterTab };
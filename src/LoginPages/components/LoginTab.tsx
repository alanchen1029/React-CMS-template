import React, { useState } from "react";
import { useFormik, FormikErrors } from 'formik';

import { history } from "../../_helpers";
import EyeOpen from "../../assets/images/eye-open-bk.svg";
import EyeClose from "../../assets/images/eye-slash-bk.svg";

interface FormValues
{
  email: string;
  password: string;
}


function validateLoginForm(values: FormValues)
{
  const errors: FormikErrors<FormValues> = {};
  if (!values.email)
  {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
  {
    errors.email = 'Invalid email address';
  }
  if (!values.password)
  {
    errors.password = 'Password Required';
  }
  return errors;
}

const LoginTab = (): JSX.Element =>
{
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: (values: FormValues) => validateLoginForm(values),
    onSubmit: values =>
    {
      alert(JSON.stringify(values, null, 2));
      loginAccount()
    },
  });

  function loginAccount()
  {
    // api request 
    setTimeout(() =>
    {
      history.push("/list-1");
    }, 500);
  }

  return (
    <div className="login-wrapper">
      <div className="header">CMS Portal</div>
      <div className="sub-header">Please log in to your account</div>
      <div className="form-wrapper">
        {/* <LoginForm /> */}
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
            {formik.touched.password && formik.errors.password && <div className="from-error-msg">{formik.errors.password}</div>}
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

export { LoginTab };

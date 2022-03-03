import React, { useState } from "react";
import { useFormik, FormikErrors } from 'formik';
import { Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: (values: FormValues) => validateLoginForm(values),
    onSubmit: values =>
    {
      alert(JSON.stringify(values, null, 2));
      loginAccount();
    },
  });

  function loginAccount()
  {
    //do api request here
    navigate("/list-1");
  }

  return (
    <div className="login-wrapper">
      <div className="header">CMS Portal</div>
      <div className="sub-header">Please log in to your account</div>
      <div className="form-wrapper">
        <form onSubmit={formik.handleSubmit}>
          <Container fluid>
            <Row>

              <Form.Group controlId="validationFormik01" className="form-input">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  isValid={formik.touched.email && !formik.errors.email}
                  isInvalid={formik.touched.email && !!formik.errors.email}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="validationFormik01" className="form-input">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  isValid={formik.touched.password && !formik.errors.password}
                  isInvalid={formik.touched.password && !!formik.errors.password}
                />
                <div className="eye-icons" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <img src={EyeClose} /> : <img src={EyeOpen} />}
                </div>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Container>
          <div className="actions-wrapper">
            <button type="submit" className="button align-right" disabled={formik.isSubmitting}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { LoginTab };

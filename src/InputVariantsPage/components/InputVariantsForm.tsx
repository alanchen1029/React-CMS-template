import React from 'react';
import { useFormik, FormikErrors } from 'formik';
import { Container, Form, Row } from "react-bootstrap";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from '@mui/lab/DatePicker';

interface InputVariantsFormValues
{
  text: string,
  number: string,
  range: number,
  radio: string,
  checkbox: boolean,
  switch: boolean,
  select: string,
  date: Date | null,
}

export function validateCreateItemForm(values: InputVariantsFormValues)
{
  const errors: FormikErrors<InputVariantsFormValues> = {};
  if (!values.text)
  {
    errors.text = 'Text Input Required';
  }
  if (!values.number)
  {
    errors.number = 'Number Input Required';
  }
  // if (!values.range)
  // {
  //   errors.range = 'Range Required';
  // }
  if (!values.radio)
  {
    errors.radio = 'Radio Check Required';
  }
  if (!values.checkbox)
  {
    errors.checkbox = 'Checkbox Required';
  }
  if (!values.select)
  {
    errors.select = 'Select one Required';
  }
  if (!values.date)
  {
    errors.date = 'Date Required';
  }
  return errors;
}

export const InputVariantsForm = (): JSX.Element =>
{
  const formik = useFormik({
    initialValues: {
      text: '',
      number: '',
      range: 0,
      radio: '',
      checkbox: false,
      switch: false,
      select: '',
      date: null,
    },
    validate: (values: InputVariantsFormValues) => validateCreateItemForm(values),
    onSubmit: values =>
    {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.values)
  return (
    <div className="form-wrapper">
      <Form onSubmit={formik.handleSubmit}>
        <Container fluid>
          <Row>
            <Form.Group controlId="validationFormik01" className="form-input">
              <Form.Label>Text Input</Form.Label>
              <Form.Control
                type="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                isValid={formik.touched.text && !formik.errors.text}
                isInvalid={formik.touched.text && !!formik.errors.text}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {formik.errors.text}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="validationFormik02" className="form-input">
              <Form.Label>Number Input</Form.Label>
              <Form.Control
                type="number"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                isValid={formik.touched.number && !formik.errors.number}
                isInvalid={formik.touched.number && !!formik.errors.number}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {formik.errors.number}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="validationFormik03" className="form-input">
              <Form.Label>Range Input</Form.Label>
              <Form.Range
                name="range"
                value={formik.values.range}
                onChange={formik.handleChange}
                min={1}
                max={10}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="validationFormik04" className="form-input">
              <Form.Label>Radio Group</Form.Label>
              <RadioGroup
                name="radio"
                aria-labelledby="demo-radio-buttons-group-label"
                value={formik.values.radio}
                onChange={formik.handleChange}
              >
                <FormControlLabel value="v1" control={<Radio />} label="Value 1" />
                <FormControlLabel value="v2" control={<Radio />} label="Value 2" />
                <FormControlLabel value="other" control={<Radio />} label="Value Other" />
              </RadioGroup>
              {formik.touched.radio && formik.errors.radio && <div className="input-error">{formik.errors.radio}</div>}
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="validationFormik05" className="form-input">
              <Form.Check
                label="Agree to terms and conditions"
                name="checkbox"
                onChange={formik.handleChange}
                isInvalid={formik.touched.checkbox && !!formik.errors.checkbox}
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="validationFormik06" className="form-input">
              <Form.Label>Toggle</Form.Label>
              <Form.Check
                name="switch"
                type='switch'
                onChange={formik.handleChange}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="validationFormik07" className="form-input">
              <Form.Label>Select</Form.Label>
              <Form.Select
                name="select"
                aria-label="select example"
                value={formik.values.select}
                onChange={formik.handleChange}
                isValid={!formik.errors.select && formik.values.select.length > 0}
                isInvalid={formik.touched.select && !!formik.errors.select}
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {formik.errors.select}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="validationFormik08" className="form-input">
              <Form.Label>Date Picker</Form.Label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  renderInput={(params) => <TextField name='date' {...params}
                    className="date-picker" />}
                  value={formik.values.date}
                  minDate={new Date()}
                  onChange={(newValue) =>
                  {
                    if (newValue)
                    {
                      formik.setFieldValue('date', newValue);
                    }
                  }}
                />
              </LocalizationProvider>
              {formik.touched.date && formik.errors.date && <div className="input-error">{formik.errors.date}</div>}
            </Form.Group>
          </Row>

          <div className="actions-wrapper">
            <button type="submit" className='align-right button' disabled={formik.isSubmitting}>
              Submit
            </button>
          </div>
        </Container>
      </Form>
    </div>
  )
}
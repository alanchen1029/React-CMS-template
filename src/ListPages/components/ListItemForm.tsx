import React from 'react';
import { useFormik, FormikErrors } from 'formik';
import { Container, Form, Row } from "react-bootstrap";

import { Food } from '../../types/demoTable.model';

interface ItemFormProps
{
  initialValues?: Food;
  onSubmit: (values: Food) => void;
  cancelSubmit?: () => void;
}

export interface DemoTableFormValues
{
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export function validateCreateItemForm(values: DemoTableFormValues)
{
  const errors: FormikErrors<DemoTableFormValues> = {};
  if (!values.name)
  {
    errors.name = 'Name Required';
  }
  if (!values.calories)
  {
    errors.calories = 'calories Required';
  }
  if (!values.fat)
  {
    errors.fat = 'fat Required';
  }
  if (!values.carbs)
  {
    errors.carbs = 'carbs Required';
  }
  if (!values.protein)
  {
    errors.protein = 'protein Required';
  }
  return errors;
}

export const ListItemForm = ({ initialValues, onSubmit, cancelSubmit }: ItemFormProps): JSX.Element =>
{
  const formik = useFormik({
    initialValues: {
      id: initialValues ? initialValues.id : '0',
      name: initialValues ? initialValues.name : '',
      calories: initialValues ? initialValues.calories : 0,
      fat: initialValues ? initialValues.fat : 0,
      carbs: initialValues ? initialValues.carbs : 0,
      protein: initialValues ? initialValues.protein : 0,
    },
    validate: (values: DemoTableFormValues) => validateCreateItemForm(values),
    onSubmit: values =>
    {
      alert(JSON.stringify(values, null, 2));
      onSubmit(values);
    },
  });

  return (
    <div className="form-wrapper">
      <Form onSubmit={formik.handleSubmit}>
        <Container fluid>
          <Row>
            <Form.Group controlId="validationFormik01" className="form-input">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                isValid={formik.touched.name && !formik.errors.name}
                isInvalid={formik.touched.name && !!formik.errors.name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="validationFormik02" className="form-input">
              <Form.Label>Calories</Form.Label>
              <Form.Control
                type="number"
                name="calories"
                value={formik.values.calories}
                onChange={formik.handleChange}
                isValid={formik.touched.calories && !formik.errors.calories}
                isInvalid={formik.touched.calories && !!formik.errors.calories}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {formik.errors.calories}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="validationFormik03" className="form-input">
              <Form.Label>Fat</Form.Label>
              <Form.Control
                type="number"
                name="fat"
                value={formik.values.fat}
                onChange={formik.handleChange}
                isValid={formik.touched.fat && !formik.errors.fat}
                isInvalid={formik.touched.fat && !!formik.errors.fat}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {formik.errors.fat}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="validationFormik04" className="form-input">
              <Form.Label>Carbs</Form.Label>
              <Form.Control
                type="number"
                name="carbs"
                value={formik.values.carbs}
                onChange={formik.handleChange}
                isValid={formik.touched.carbs && !formik.errors.carbs}
                isInvalid={formik.touched.carbs && !!formik.errors.carbs}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {formik.errors.carbs}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="validationFormik05" className="form-input">
              <Form.Label>Protein</Form.Label>
              <Form.Control
                type="number"
                name="protein"
                value={formik.values.protein}
                onChange={formik.handleChange}
                isValid={formik.touched.protein && !formik.errors.protein}
                isInvalid={formik.touched.protein && !!formik.errors.protein}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {formik.errors.protein}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="actions-wrapper">
            {cancelSubmit &&
              <button
                className="cancel-button"
                disabled={formik.isSubmitting}
                onClick={(e) =>
                {
                  e.preventDefault();
                  formik.resetForm();
                  cancelSubmit();
                }}
              >
                Cancel
              </button>
            }
            <button type="submit" className='align-right' disabled={formik.isSubmitting}>
              Save
            </button>
          </div>
        </Container>

      </Form>
    </div>
  )
}
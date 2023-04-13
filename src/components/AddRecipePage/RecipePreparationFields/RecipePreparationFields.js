import { Field, ErrorMessage } from 'formik';

export const RecipePreparationFields = () => {
  return (
    <div>
      <h2>Recipe Preparation</h2>
      <Field name="instructions" type="textarea" />
      <ErrorMessage name="instructions" />
    </div>
  );
};

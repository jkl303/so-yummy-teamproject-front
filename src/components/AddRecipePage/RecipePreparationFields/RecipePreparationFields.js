import { Field, ErrorMessage } from 'formik';
import { RecipePreparationStyled } from './RecipePreparationFields.styled';

const TextArea = ({ field }) => {
  return <textarea {...field} placeholder="Enter recipe" />;
};

export const RecipePreparationFields = () => {
  return (
    <RecipePreparationStyled>
      <h2>Recipe Preparation</h2>
      <Field name="instructions" component={TextArea} />
      {/* <ErrorMessage name="instructions" /> */}
    </RecipePreparationStyled>
  );
};

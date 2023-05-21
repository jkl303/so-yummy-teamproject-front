import { Field, ErrorMessage } from 'formik';
import { RecipePreparationStyled } from './RecipePreparationFields.styled';
import { CustomErrorMessage } from '../AddRecipeForm/CustomErrorMessage';

const TextArea = ({ field }) => {
  return <textarea {...field} placeholder="Enter recipe" />;
};

export const RecipePreparationFields = () => {
  return (
    <>
      <RecipePreparationStyled>
        <h2>Recipe Preparation</h2>
        <Field name="instructions" component={TextArea} />
      </RecipePreparationStyled>
      <ErrorMessage name="instructions" component={CustomErrorMessage} />
    </>
  );
};

import { Field, ErrorMessage } from 'formik';
import { SelectField } from './SelectField/SelectField';
import { FileField } from './FileField/FileField';
import { timeOptions } from './timeOptions';
import { RecipeDescriptionFieldsStyled } from './RecipeDescriptionFields.styled';
import { useSelector } from 'react-redux';
import { getCategories } from 'redux/recipes/categories/selectors';
import { CustomErrorMessage } from '../AddRecipeForm/AddRecipeForm.styled';

export const RecipeDescriptionFields = () => {
  const categories = useSelector(getCategories).map(category => ({
    value: category,
    label: category,
  }));

  return (
    <RecipeDescriptionFieldsStyled>
      <Field name="recipeImg" component={FileField} type="file" />
      <ul>
        <li>
          <label htmlFor="title">Enter item title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" component={CustomErrorMessage} />
        </li>
        <li>
          <label htmlFor="description">Enter about recipe</label>
          <Field name="description" type="text" />
        </li>
        <li>
          <label htmlFor="category">Category</label>
          <Field name="category" component={SelectField} options={categories} />
          <ErrorMessage name="category" component={CustomErrorMessage} />
        </li>
        <li>
          <label htmlFor="time">Cooking time</label>
          <Field name="time" component={SelectField} options={timeOptions} />
          <ErrorMessage name="time" component={CustomErrorMessage} />
        </li>
      </ul>
    </RecipeDescriptionFieldsStyled>
  );
};

import { Field, ErrorMessage } from 'formik';
import { SelectField } from './SelectField/SelectField';
import { FileField } from './FileField/FileField';
import { timeOptions } from './timeOptions';
import {
  DescriptionInputStyled,
  DescriptionLabelStyled,
  DescriptionListStyled,
  RecipeDescriptionFieldsStyled,
} from './RecipeDescriptionFields.styled';
import { useSelector } from 'react-redux';
import { getCategories } from 'redux/recipes/categories/selectors';
import { CustomErrorMessage } from '../AddRecipeForm/CustomErrorMessage';

export const RecipeDescriptionFields = () => {
  const categories = useSelector(getCategories).map(category => ({
    value: category,
    label: category,
  }));

  return (
    <RecipeDescriptionFieldsStyled>
      <Field name="recipeImg" component={FileField} type="file" />
      <DescriptionListStyled>
        <li>
          <DescriptionLabelStyled htmlFor="title">
            Enter item title
          </DescriptionLabelStyled>
          <DescriptionInputStyled name="title" type="text" />
          <ErrorMessage name="title" component={CustomErrorMessage} />
        </li>
        <li>
          <DescriptionLabelStyled htmlFor="description">
            Enter about recipe
          </DescriptionLabelStyled>
          <DescriptionInputStyled name="description" type="text" />
        </li>
        <li>
          <DescriptionLabelStyled htmlFor="category">
            Category
          </DescriptionLabelStyled>
          <Field name="category" component={SelectField} options={categories} />
          <ErrorMessage name="category" component={CustomErrorMessage} />
        </li>
        <li>
          <DescriptionLabelStyled htmlFor="time">
            Cooking time
          </DescriptionLabelStyled>
          <Field name="time" component={SelectField} options={timeOptions} />
          <ErrorMessage name="time" component={CustomErrorMessage} />
        </li>
      </DescriptionListStyled>
    </RecipeDescriptionFieldsStyled>
  );
};

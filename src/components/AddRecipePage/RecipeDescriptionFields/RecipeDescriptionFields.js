import { Field, ErrorMessage } from 'formik';
import { SelectField } from '../customFields/SelectField/SelectField';
import { FileField } from '../customFields/FileField/FileField';
import { timeOptions } from './timeOptions';
import { RecipeDescriptionFieldsStyled } from './RecipeDescriptionFields.styled';
// import { useSelector } from 'react-redux';
// import { getCategories } from 'redux/recipes/categories/selectors';
// import { useEffect } from 'react';

const categoryOptions = [
  {
    value: 'Beef',
    label: 'Beef',
  },
  {
    value: 'Breakfast',
    label: 'Breakfast',
  },
  {
    value: 'Chicken',
    label: 'Chicken',
  },
  {
    value: 'Dessert',
    label: 'Dessert',
  },
  {
    value: 'Goat',
    label: 'Goat',
  },
  {
    value: 'Lamb',
    label: 'Lamb',
  },
  {
    value: 'Miscellaneous',
    label: 'Miscellaneous',
  },
  {
    value: 'Pasta',
    label: 'Pasta',
  },
  {
    value: 'Pork',
    label: 'Pork',
  },
  {
    value: 'Seafood',
    label: 'Seafood',
  },
  {
    value: 'Side',
    label: 'Side',
  },
  {
    value: 'Starter',
    label: 'Starter',
  },
  {
    value: 'Vegan',
    label: 'Vegan',
  },
  {
    value: 'Vegetarian',
    label: 'Vegetarian',
  },
];

export const RecipeDescriptionFields = () => {
  // const categories = useSelector(getCategories).map(category =>
  //   categories.push({
  //     value: category,
  //     label: category,
  //   })
  // );

  return (
    <RecipeDescriptionFieldsStyled>
      <Field name="recipeImg" component={FileField} type="file" />
      <ul>
        <li>
          <label htmlFor="title">Enter item title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />
        </li>
        <li>
          <label htmlFor="description">Enter about recipe</label>
          <Field name="description" type="text" />
        </li>
        <li>
          <label htmlFor="category">Category</label>
          <Field
            name="category"
            component={SelectField}
            options={categoryOptions}
          />
          <ErrorMessage name="category" />
        </li>
        <li>
          <label htmlFor="time">Cooking time</label>
          <Field name="time" component={SelectField} options={timeOptions} />
          <ErrorMessage name="time" />
        </li>
      </ul>
    </RecipeDescriptionFieldsStyled>
  );
};

import React from 'react';
import { Formik, Form } from 'formik';
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from '../RecipePreparationFields/RecipePreparationFields';
import { addRecipeSchema } from 'schemas/recipeSchema';
import { addRecipe } from 'API/addResipe';
import { AddRecipeBtn } from 'components/Buttons/AddRecipeBtn/AddRecipeBtn';
import { AddRecipeFormWrapper } from './AddRecipeForm.styled';

const initialValues = {
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [],
  instructions: '',
};

export const AddRecipeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addRecipeSchema}
      onSubmit={(values, { setSubmitting }) => {
        values.ingredients = values.ingredients.filter(
          ingredient => ingredient !== null
        );
        console.log(values);
        addRecipe(values);
        setSubmitting(false);
      }}
    >
      {({ values }) => {
        return (
          <AddRecipeFormWrapper>
            <Form>
              <RecipeDescriptionFields />
              <RecipeIngredientsFields values={values} />
              <RecipePreparationFields />
              <AddRecipeBtn type="submit">Add</AddRecipeBtn>
            </Form>
          </AddRecipeFormWrapper>
        );
      }}
    </Formik>
  );
};

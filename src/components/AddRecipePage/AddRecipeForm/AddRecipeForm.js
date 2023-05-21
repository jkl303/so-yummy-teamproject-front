import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Formik, Form } from 'formik';
import { addRecipe } from 'API/addResipe';
import { addRecipeSchema } from 'schemas/recipeSchema';
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from '../RecipePreparationFields/RecipePreparationFields';
import { AddRecipeBtn } from 'components/Buttons/AddRecipeBtn/AddRecipeBtn';
import { nanoid } from 'nanoid';

const initialValues = {
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [
    { reactId: nanoid() },
    { reactId: nanoid() },
    { reactId: nanoid() },
  ],
  instructions: '',
};
export const AddRecipeForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addRecipeSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        values.ingredients = values.ingredients.filter(
          ingredient => ingredient.id
        );
        addRecipe(values);
        resetForm();
        setSubmitting(false);
        toast.success('Recipe added!');
        navigate('/my', { replace: true });
      }}
    >
      {({ values }) => (
        <Form>
          <RecipeDescriptionFields />
          <RecipeIngredientsFields ingredients={values.ingredients} />
          <RecipePreparationFields />
          <AddRecipeBtn type="submit">Add</AddRecipeBtn>
        </Form>
      )}
    </Formik>
  );
};

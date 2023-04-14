import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from '../RecipePreparationFields/RecipePreparationFields';
import { addRecipeSchema } from 'schemas/recipeSchema';
import { addRecipe } from 'API/addResipe';
import { AddRecipeBtn } from 'components/Buttons/AddRecipeBtn/AddRecipeBtn';
import { AddRecipeFormWrapper } from './AddRecipeForm.styled';
import { toast } from 'react-hot-toast';

const initialValues = {
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [],
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
          ingredient => ingredient !== null
        );
        addRecipe(values);
        resetForm();
        toast.success('Recipe added!');
        setSubmitting(false);
        navigate('/my', { replace: true });
      }}
    >
      <AddRecipeFormWrapper>
        <Form>
          <RecipeDescriptionFields />
          <RecipeIngredientsFields />
          <RecipePreparationFields />
          <AddRecipeBtn type="submit">Add</AddRecipeBtn>
        </Form>
      </AddRecipeFormWrapper>
    </Formik>
  );
};

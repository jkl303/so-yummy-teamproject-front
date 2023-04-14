import * as Yup from 'yup';

export const addRecipeSchema = Yup.object().shape({
  title: Yup.string().min(3, 'Too Short!').required('Required'),
  category: Yup.string().required('Required'),
  area: Yup.string(),
  instructions: Yup.string()
    .required('Required')
    .min(20, 'Instructions must be at least 20 characters'),
  description: Yup.string(),
  recipeImg: Yup.mixed(),
  preview: Yup.string(),
  time: Yup.string().required('Required'),
  popularity: Yup.number(),
  favorites: Yup.array(),
  likes: Yup.array(),
  youtube: Yup.string(),
  tags: Yup.array(),
  ingredients: Yup.array()
    .min(1, 'Select one o more ingredients')
    .required('Required'),
});

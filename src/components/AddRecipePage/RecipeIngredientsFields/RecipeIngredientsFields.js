import { useState } from 'react';
import { Field, ErrorMessage, FieldArray } from 'formik';
import { MeasureField } from '../customFields/MeasureField/MeasureField';
import { useSelector } from 'react-redux';
import { getIngredients } from 'redux/recipes/ingredients/selectors';
import {
  AddBtns,
  PlusIcon,
  MinusIcon,
  RecipeIngredientsStyled,
  TtlAndBtns,
  IngredientsStyled,
  XIcon,
} from './RecipeIngredientsFields.styled';
import { IngredientField } from '../customFields/IngredientField/IngredientField';
import { measureOptions } from './measureOptions';

export const RecipeIngredientsFields = () => {
  const [ingredientFields, setIngredientFields] = useState([0, 1, 2]);

  const ingredients = useSelector(getIngredients).map(ingredient => ({
    value: ingredient._id,
    label: ingredient.ttl,
  }));

  const addField = () => {
    setIngredientFields(prevFields => [
      ...prevFields,
      Number(prevFields.slice(-1)) + 1,
    ]);
  };

  const deleteField = deletedField => {
    setIngredientFields(
      ingredientFields.filter(field => field !== Number(deletedField, 1))
    );
  };

  const deleteLastField = () => {
    setIngredientFields(ingredientFields.slice(0, -1));
  };

  return (
    <RecipeIngredientsStyled>
      <FieldArray
        name="ingredients"
        render={arrayHelpers => (
          <div>
            <TtlAndBtns>
              <h2>Ingredients</h2>
              <AddBtns>
                <button
                  type="button"
                  onClick={() => {
                    arrayHelpers.pop();
                    deleteLastField();
                  }}
                >
                  <MinusIcon />
                </button>

                <span>{ingredientFields.length}</span>
                <button
                  type="button"
                  onClick={() => {
                    arrayHelpers.push({});
                    addField();
                  }}
                >
                  <PlusIcon />
                </button>
              </AddBtns>
            </TtlAndBtns>
            <IngredientsStyled>
              {ingredientFields.map(field => (
                <li key={field}>
                  <Field
                    name={`ingredients[${field}].id`}
                    component={IngredientField}
                    options={ingredients}
                  />
                  <Field
                    name={`ingredients[${field}].measure`}
                    options={measureOptions}
                    component={MeasureField}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      arrayHelpers.replace(field, null);
                      deleteField(field);
                    }}
                  >
                    <XIcon />
                  </button>
                </li>
              ))}
            </IngredientsStyled>
            <ErrorMessage name="ingredients" />
          </div>
        )}
      />
    </RecipeIngredientsStyled>
  );
};

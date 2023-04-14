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

const measureOptions = [
  {
    value: 'tbs',
    label: 'tbs',
  },
  {
    value: 'tsp',
    label: 'tsp',
  },
  {
    value: 'kg',
    label: 'kg',
  },
  {
    value: 'g',
    label: 'g',
  },
];

const ingredientOptions = [
  {
    value: '640c2dd963a319ea671e365f',
    label: 'Egg',
  },
  {
    value: '640c2dd963a319ea671e3665',
    label: 'Salmon',
  },
  {
    value: '640c2dd963a319ea671e3661',
    label: 'Banana',
  },
  {
    value: '640c2dd963a319ea671e365b',
    label: 'Sugar',
  },
];

export const RecipeIngredientsFields = () => {
  const [ingredientFields, setIngredientFields] = useState([0, 1, 2]);
  const ingredients = useSelector(getIngredients);

  // const ingredientOptions = ingredients.map(ingredient =>
  //   ingredientOptions.push({
  //     value: ingredient._id,
  //     label: ingredient.ttl,
  //   })
  // );

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
                    options={ingredientOptions}
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

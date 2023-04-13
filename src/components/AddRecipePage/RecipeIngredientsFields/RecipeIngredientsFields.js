import { useEffect, useState } from 'react';
import { Field, ErrorMessage, FieldArray } from 'formik';
import { SelectField } from '../customFields/SelectField/SelectField';
import { MeasureField } from '../customFields/MeasureField/MeasureField';
import { useSelector } from 'react-redux';
import { getIngredients } from 'redux/recipes/ingredients/selectors';

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
  // const categories = useSelector(getIngredients);

  // const ingredientOptions = categories.map(ingredient =>
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
    <div>
      <h2>Ingredients</h2>
      <FieldArray
        name="ingredients"
        render={arrayHelpers => (
          <div>
            <button
              type="button"
              onClick={() => {
                arrayHelpers.pop();
                deleteLastField();
              }}
            >
              -
            </button>
            <p>{ingredientFields.length}</p>
            <button
              type="button"
              onClick={() => {
                arrayHelpers.push({});
                addField();
              }}
            >
              +
            </button>
            <ul>
              {ingredientFields.map(field => (
                <li key={field}>
                  <Field
                    name={`ingredients[${field}].id`}
                    component={SelectField}
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
                    -
                  </button>
                  <ErrorMessage name="ingredients" />
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </div>
  );
};

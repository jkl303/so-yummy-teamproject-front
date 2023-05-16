import PropTypes from 'prop-types';
import { Field, ErrorMessage, FieldArray } from 'formik';
import { useSelector } from 'react-redux';
import { getIngredients } from 'redux/recipes/ingredients/selectors';
import { nanoid } from 'nanoid';
import { measureOptions } from './measureOptions';
import { IngredientField } from './IngredientField/IngredientField';
import { MeasureField } from './MeasureField/MeasureField';
import { CustomErrorMessage } from '../AddRecipeForm/AddRecipeForm.styled';
import {
  AddBtns,
  PlusIcon,
  MinusIcon,
  RecipeIngredientsStyled,
  TtlAndBtns,
  IngredientsStyled,
  XIcon,
} from './RecipeIngredientsFields.styled';

export const RecipeIngredientsFields = ({ ingredients }) => {
  const ingredientOptions = useSelector(getIngredients).map(({ _id, ttl }) => ({
    value: _id,
    label: ttl,
  }));

  console.log(ingredients);

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
                  }}
                >
                  <MinusIcon />
                </button>

                <span>{ingredients.length}</span>
                <button
                  type="button"
                  onClick={() => {
                    arrayHelpers.push({ reactId: nanoid() });
                  }}
                >
                  <PlusIcon />
                </button>
              </AddBtns>
            </TtlAndBtns>
            <IngredientsStyled>
              {ingredients.map((ingredient, index) => (
                <li key={ingredient.reactId}>
                  <Field
                    name={`ingredients[${index}].id`}
                    component={IngredientField}
                    options={ingredientOptions}
                  />
                  <Field
                    name={`ingredients[${index}].measure`}
                    component={MeasureField}
                    options={measureOptions}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      arrayHelpers.remove(index);
                    }}
                  >
                    <XIcon />
                  </button>
                </li>
              ))}
            </IngredientsStyled>
            <ErrorMessage name="ingredients" component={CustomErrorMessage} />
          </div>
        )}
      />
    </RecipeIngredientsStyled>
  );
};

RecipeIngredientsFields.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

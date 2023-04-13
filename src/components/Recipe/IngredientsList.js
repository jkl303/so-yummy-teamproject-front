import React from 'react';
import {
  IngridientsWrap,
  TableHeader,
  IngridientsItem,
  IngridientImage,
  IngridientInfo,
  IngridientName,
  IngridientDetails,
  IngridientQuantity,
  IngridientCheck,
} from './IngredientsList.style';
import { useDispatch } from 'react-redux';
import {
  addShoppingListItemThunkOperation,
  deleteShoppingListItemThunkOperation,
} from '../../redux/shoppingList/shoppingListOperations';

export function IngredientsList({ ingredients, measure, onIngredientToggle }) {
  const dispatch = useDispatch();

  const handleCheckboxClick = (id, measure, isChecked) => {
    const newItem = { ingredientId: id, ingredientQuantity: measure };

    if (isChecked) {
      dispatch(addShoppingListItemThunkOperation(newItem));
    } else {
      dispatch(deleteShoppingListItemThunkOperation(id));
    }

    onIngredientToggle(id, measure, isChecked);
  };

  return (
    <IngridientsWrap>
      <TableHeader>
        <p>Ingredients</p>
        <p>Number</p>
        <p>Add to list</p>
      </TableHeader>
      <ul>
        {ingredients.map(({ _id, ttl, thb, measure }) => (
          <IngridientsItem key={_id}>
            <IngridientImage src={thb} alt={ttl} />
            <IngridientInfo>
              <IngridientName>{ttl}</IngridientName>
              <IngridientDetails>
                <IngridientQuantity>{measure}</IngridientQuantity>
                <IngridientCheck>
                  <input
                    type="checkbox"
                    id={_id}
                    onChange={e =>
                      handleCheckboxClick(_id, measure, e.target.checked)
                    }
                  />
                  <label htmlFor={_id}></label>
                </IngridientCheck>
              </IngridientDetails>
            </IngridientInfo>
          </IngridientsItem>
        ))}
      </ul>
    </IngridientsWrap>
  );
}

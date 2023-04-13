import React, { useState } from 'react';
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

export function IngredientsList({ ingredients, onIngredientToggle }) {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleIngredientToggle = (id, isChecked) => {
    onIngredientToggle(id, isChecked);

    if (isChecked) {
      setCheckedItems((prevItems) => [...prevItems, id]);
    } else {
      setCheckedItems((prevItems) => prevItems.filter((item) => item !== id));
    }
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
                    checked={checkedItems.includes(_id)}
                    onChange={(e) => handleIngredientToggle(_id, e.target.checked)}
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
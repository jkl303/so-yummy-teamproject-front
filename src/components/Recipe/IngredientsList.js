    import React from 'react';
    import {IngridientsWrap, TableHeader, IngridientsItem, IngridientImage,
  IngridientInfo, IngridientName, IngridientDetails, IngridientQuantity, IngridientCheck} from './IngredientsList.style';

export function IngredientsList({ ingredients }) {
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
                <input type={'checkbox'} id={_id} />
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
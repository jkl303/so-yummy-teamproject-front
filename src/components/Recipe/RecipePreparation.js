import React from 'react';
import {PreparationList, PreparationWrap,PreparationSteps, PreparationImg, PreparationHeder} from './RecipePreparation.styled'

export function RecipePreparation({ instructions, thumb, title }) {
  const sentences = instructions.split('.').filter(sentence => sentence !== '');
  
  return (
    <>
    <PreparationWrap>
    <PreparationSteps>
    <PreparationHeder>Recipe Preparation</PreparationHeder>
      <PreparationList>
        {sentences.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </PreparationList>
      </PreparationSteps>
      <PreparationImg src={thumb} alt={title}/>
      </PreparationWrap>
    </>
  );
}

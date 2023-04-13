import React from "react";
import {
  ContainerFavorite,
  WrapperNotSearch,
  NotSearchText,
  ImgNotSearch,
} from "./NoSearch.styled";
import notSearchPng from "./img/kisspng-vegetable-fruit-basket-century-farms-international-fruits-and-vegetables-5abfb9c60122f5 1.png";

export const NotSearch = () => {
  return (
    <ContainerFavorite>
      <WrapperNotSearch>
        <ImgNotSearch src={notSearchPng} alt="not-search" />
        <NotSearchText>
          The user hasn't added anything to favorites yet
        </NotSearchText>
      </WrapperNotSearch>
    </ContainerFavorite>
  );
};

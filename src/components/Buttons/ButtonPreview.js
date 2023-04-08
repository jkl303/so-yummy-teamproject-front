import { SearchBtn } from './SearchBtn/SearchBth';
import { OtherCategoriesBtn } from './OtherCategoriesBtn/OtherCategoriesBtn';
import { SubscribeBtn } from './AddToFavoriteBtn/SubcribeBtn/SubcribeBtn';
import { LogOutBtn } from './LogOutBtn/LogOutBtn';
import { CancelBtn } from './CancelBtn/CancelBtn';
import { SeeAllBtn } from './AddToFavoriteBtn/SeeAllBtn/SeeAllBtn';
import { SeeRecipeBtn } from './AddToFavoriteBtn/SeeRecipeBtn/SeeRecipeBtn';
import { AddToFavoriteBtn } from './AddToFavoriteBtn/AddToFavoriteBtn';
import { HeroAuthBtn } from './HeroAuthBtn/HeroAuthBtn';


export default function ButtonPreview () {
  return (
    <>      
        <div
          style={{
            backgroundColor: '#666',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',

            alignItems: 'flex-start',
          }}
        >
          <SearchBtn invertBg />
          <br />
          <OtherCategoriesBtn />
          <br />
          <SubscribeBtn />
          <br />
          <div style={{ display: 'flex' }}>
            <LogOutBtn />
            <br />
            <CancelBtn />
          </div>
          <br />
          <SeeAllBtn />
          <br />
          <SeeRecipeBtn />
          <br />
          <AddToFavoriteBtn />
          <br />
          <HeroAuthBtn active>Active</HeroAuthBtn>
          <br />
          <HeroAuthBtn>Button</HeroAuthBtn>
        </div>
      
    </>
  );
};

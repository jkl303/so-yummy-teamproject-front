import { SearchBtn } from './SearchBtn/SearchBth';
import { OtherCategoriesBtn } from './OtherCategoriesBtn/OtherCategoriesBtn';
import { SubscribeBtn } from './SubcribeBtn/SubcribeBtn';
import { LogOutMenuBtn } from './LogOutMenuBtn/LogOutMenuBtn';
import { LogOutModalBtn } from './LogOutModalBtn/LogOutModalBtn';
import { SeeAllBtn } from './SeeAllBtn/SeeAllBtn';
import { SeeRecipeBtn } from './SeeRecipeBtn/SeeRecipeBtn';
import { AddToFavoriteBtn } from './AddToFavoriteBtn/AddToFavoriteBtn';
import { HeroAuthBtn } from './HeroAuthBtn/HeroAuthBtn';
import { AddRecipeBtn } from './AddRecipeBtn/AddRecipeBtn';

export default function ButtonPreview() {
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
        <SearchBtn />
        <OtherCategoriesBtn />
        <SubscribeBtn />
        <LogOutMenuBtn />
        <div style={{ display: 'flex' }}>
          <LogOutModalBtn text="Logout" />
          <LogOutModalBtn secondary text="Cancel" />
        </div>
        <SeeAllBtn />
        <SeeRecipeBtn />
        <AddToFavoriteBtn />
        <AddRecipeBtn />
        <HeroAuthBtn active text="Sign In" />
        <HeroAuthBtn text="Register" />
      </div>
    </>
  );
}

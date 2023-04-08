import { SearchBtn } from './SearchBtn/SearchBth';
import { OtherCategoriesBtn } from './OtherCategoriesBtn/OtherCategoriesBtn';
import { SubscribeBtn } from './SubcribeBtn/SubcribeBtn';
import { LogOutMenuBtn } from './LogOutBtn/LogOutMenuBtn';
import { LogoutModalBtn } from './LogoutModalBtn/LogoutModalBtn';
import { SeeAllBtn } from './SeeAllBtn/SeeAllBtn';
import { SeeRecipeBtn } from './SeeRecipeBtn/SeeRecipeBtn';
import { AddToFavoriteBtn } from './AddToFavoriteBtn/AddToFavoriteBtn';
import { HeroAuthBtn } from './HeroAuthBtn/HeroAuthBtn';

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
          <LogoutModalBtn text="Logout" />
          <br />
          <LogoutModalBtn secondary text="Cancel" />
        </div>

        <SeeAllBtn />
        <SeeRecipeBtn />
        <AddToFavoriteBtn />
        <HeroAuthBtn active>Active</HeroAuthBtn>
        <HeroAuthBtn>Button</HeroAuthBtn>
      </div>
    </>
  );
}

//color in coments represents how color changes from light to dark theme
export const lightTheme = {
  colors: {
    accent: 'var(--accent)', //=> green
    /////////////////////////to green
    bgFooter: 'var(--bg-btn)', //black => green
    searchDropdown: 'var(--bg)', //white => green
    select: 'var(--bg)', //white => green
    btn: 'var(--bg-btn)', //black(#22252a) => green
    btnHover: 'var(--accent)', //green => darkgreen
    btnHoverInverted: 'var(--bg-btn)', //black(#22252a) => darkgreen
    bgActivePage: 'var(--bg-accent)', //lightgreen => green
    /////////////////////////green =>
    ingr: 'var(--bg-accent)', //lightgreen => dark(#2a2c36)
    btnFoot: 'var(--accent)', //green => dark(#1e1f28)
    btnDelBg: 'var(--bg-accent)', //lightgreen => black
    /////////////////////////gray/white => dark/black
    bg: 'var(--bg)', //white => dark
    bgSec: 'var(--bg-sec)', //white => dark
    input: 'var(--bg-input)', //white => black
    bgModal: 'var(--bg)', //white => dark(#2a2c36)
    bgRecipe: 'var( --bg-recipe-ing)', //lightgreen => dark(#2a2c36)
    borderRecipe: 'var(--bdr)', //lightgreen => dark(#2a2c36)
    /////////////////////////dark/black to gray/white
    txt: 'var(--txt)', //black(#23262a) => white(#fafafa)
    title: 'var(--txt-title)', //dark(#001833) => white(#fafafa)
    subtitle: 'var(--txt-subtitle)', //dark(#3e4462) => white(#fafafa)
    txtArticle: 'var(--txt)', //dark(#23262a) => gray(#ffffff99)(60%)
    txtArticleMini: 'var(--txt-aside-list)', //gray(#7e7e7e) => lightgay(#ffffff99), recipes in add recipe
    txtRecipeInner: 'var(--txt-instructions-light)', //gray(#000000cc) (50%) => white(#fafafa), preparation
    txtInputInactive: 'var(--txt-sec)', //gray(#00000080)(50%) => lightgray(#ffffff99)(60%)
    form: 'var(--bg-sec-dark)', //black => white(#fafafa)

    /////////////////////////approved by Daria
    shopBorder: 'var(--bdr)', //lightgray(#ffffff99)(60%) => gray(#00000080)(50%)
    shopItemBgr: 'var(--shop-item-bgr)', //lightgreen => dark
    shopCloseIc: 'var(--shop-close)', //dark => white
    txtCopyright: 'var(--txt-copyright)', //dark => white
    /////////////////////////cancel
    txtHeroRecipe: 'var(--txt)', //cancel
    btnSec: 'var(--bg-input)', //cancel
    txtBtn: 'var(--txt-dark)', //cancel
    btnInverted: 'var(--accent)', //cancel
  },
};

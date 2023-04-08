export const lightTheme = {
  colors: {
    accent: 'var(--accent)',
    bg: 'var(--bg)',
    bgSec: 'var(--bg-sec)', //lists, cards etc
    bgModal: 'var(--bg)',
    input: 'var(--bg-input)',
    select: 'var(--bg)',
    ingr: 'var(--bg-accent)',
    form: 'var(--bg-sec-dark)', //login, signup
    btn: 'var(--bg-btn)', //22252a => green
    btnHover: 'var(--accent)',
    btnSec: 'var(--bg-input)', //cancel
    btnFoot: 'var(--accent)',
    btnInverted: 'var(--accent)',
    btnHoverInverted: 'var(--bg-btn)',

    txt: 'var(--txt)',
    title: 'var(--txt-title)',
    subtitle: 'var(--txt-subtitle)',
    txtHeroRecipe: 'var(--txt)',
    txtArticle: 'var(--txt)',
    txtArticleMini: 'var(--txt-aside-list)', //recipes in add recipe
    txtRecipeInner: 'var(--txt-instructions-light)', //preparation, needs some better naming
    txtBtn: 'var(--txt-dark)', //btn white txt+footer
    txtInputActive: 'var(--txt)',
    txtInputInactive: 'var(--txt-sec)',
  },
  media: {
    desktop: '@media screen and (min-width: 1440px)',
    tablet: '@media screen and (min-width: 768px)',
    mobile: '@media screen and (min-width: 375px)',
  },
};

// export const lightTheme = {
//   colors: {
//     accent: 'var(--accent)',
//     bg: 'var(--bg)', //main bg, light => dark #fafafa => #1e1f28
//     bgSec: 'var(--bg-sec)', //cards, #fff => #2a2c36
//     bgModal: 'var(--bg)', //#fafafa => #2a2c36
//     input: 'var(--bg-input)', //#d9d9d9 => #1e1f28
//     select: 'var(--bg)', //dropdown #fafafa => accent
//     ingr: 'var(--bg-accent)', //light green => #2a2c36
//     form: 'var(--bg-sec-dark)', //login, signup, same in dark scheme
//     btn: 'var(--bg-btn)', //22252a => green
//     btnHover: 'var(--accent)', //accent => custom accent, иначе не знаю, что можно подобрать в темной схеме
//     btnSec: 'var(--bg-input)', //cancel
//     btnFoot: 'var(--accent)', //accent => #1e1f28
//     btnInverted: 'var(--accent)', //green => 22252a
//     btnHoverInverted: 'var(--bg-btn)', //22252a => green

//     txt: 'var(--txt)', //#23262a => #fafafa
//     title: 'var(--txt-title)', //#001833 => #fafafa
//     subtitle: 'var(--txt-subtitle)', //#3e4462 => #fafafa
//     txtHeroRecipe: 'var(--txt)', //hero content for recipe page, #23262a, unchanged
//     txtArticle: 'var(--txt)', //card, #23262a => #ffffff99 (60%)
//     txtArticleMini: 'var(--txt-aside-list)', //recipes in add recipe, #7e7e7e => #ffffff99
//     txtRecipeInner: 'var(--txt-instructions-light)', //preparation, #000000cc (50%) => #fafafa
//     txtBtn: 'var(--txt-dark)', //btn white txt+footer txt, unchanged
//     txtInputInactive: 'var(--txt-sec)', //#00000080(50%) => #ffffff99(60%)
//   },
// };

export const lightTheme = {
  colors: {
    accent: 'var(--accent)',
    bg: 'var(--bg)', //main bg, light => dark #fafafa => #1e1f28
    bgSec: 'var(--bg-sec)', //cards, #fff => #2a2c36
    bgFooter: 'var(--bg-btn)',
    bgModal: 'var(--bg)', //#fafafa => #2a2c36
    input: 'var(--bg-input)', //#d9d9d9 => #1e1f28
    select: 'var(--bg)', //dropdown #fafafa => accent
    ingr: 'var(--bg-accent)', //light green => #2a2c36
    form: 'var(--bg-sec-dark)', //login, signup, same in dark scheme
    btn: 'var(--bg-btn)', //22252a => green
    btnHover: 'var(--accent)', //accent => custom accent, иначе не знаю, что можно подобрать в темной схеме
    btnSec: 'var(--bg-input)', //cancel
    btnFoot: 'var(--accent)', //accent => #1e1f28
    btnInverted: 'var(--accent)', //green => 22252a
    btnHoverInverted: 'var(--bg-btn)', //22252a => green

    txt: 'var(--txt)', //#23262a => #fafafa
    title: 'var(--txt-title)', //#001833 => #fafafa
    subtitle: 'var(--txt-subtitle)', //#3e4462 => #fafafa
    txtHeroRecipe: 'var(--txt)', //hero content for recipe page, #23262a, unchanged
    txtArticle: 'var(--txt)', //card, #23262a => #ffffff99 (60%)
    txtArticleMini: 'var(--txt-aside-list)', //recipes in add recipe, #7e7e7e => #ffffff99
    txtRecipeInner: 'var(--txt-instructions-light)', //preparation, #000000cc (50%) => #fafafa
    txtBtn: 'var(--txt-dark)', //btn white txt+footer txt, unchanged
    txtInputInactive: 'var(--txt-sec)', //#00000080(50%) => #ffffff99(60%)

    /////////////////////////approved by Daria
    shopBorder: 'var(--bdr)',
    shopItemBgr: 'var(--shop-item-bgr)',
    shopCloseIc: 'var(--shop-close)',
  },
};

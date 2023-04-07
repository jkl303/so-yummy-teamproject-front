const breakpionts = {
  desktop: 1440,
  tablet: 768,
  mobile: 375,
};

export const mediaQueries = key => {
  return style => `@media (min-width: ${breakpionts[key]}px) {${style}}`;
};

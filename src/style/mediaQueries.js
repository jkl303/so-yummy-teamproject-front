const breakpionts = {
  desktop: 1440,
  tablet: 768,
  mobile: 375,
};

export const mediaQueries = key => {
  return style => `@media (max-width): ${breakpionts[key]}px {${style}}`;
};

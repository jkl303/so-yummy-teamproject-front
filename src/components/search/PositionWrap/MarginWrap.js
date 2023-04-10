import { Margins } from './MarginWrap.styled';

/* 
  mT = { mob: 0, tab: 0, desk: 0 },
  mB = { mob: 0, tab: 0, desk: 0 },
  mR = { mob: 'auto', tab: 'auto', desk: 'auto' },
  mL = { mob: 'auto', tab: 'auto', desk: 'auto' },
   */

export const MarginWrap = margins => {
  console.log(margins);
  return <Margins {...margins} />;
};

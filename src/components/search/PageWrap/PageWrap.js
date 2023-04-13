import { Page, TitlePage } from './PageWrap.styled';

export const PageWrap = ({
  titleText,
  padT = { mob: 114, tab: 136, desk: 164 },
  padB = { mob: 100, tab: 200 },
  children,
}) => {
  return (
    <Page padT={padT} padB={padB}>
      {titleText && <TitlePage>{titleText}</TitlePage>}
      {children}
    </Page>
  );
};

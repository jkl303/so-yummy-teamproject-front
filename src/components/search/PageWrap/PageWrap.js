import { Page, TitlePage } from './PageWrap.styled';

export const PageWrap = ({
  titleText,
  padT = { mob: 50, tab: 70, desk: 100 },
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

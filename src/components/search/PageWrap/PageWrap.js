import { Page, TitlePage } from './PageWrap.styled';

export const PageWrap = ({ titleText, padT, padB, children }) => {
  return (
    <Page padT={padT} padB={padB}>
      {titleText && <TitlePage>{titleText}</TitlePage>}
      {children}
    </Page>
  );
};

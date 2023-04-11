import {
  ContainerWrap,
  ContainerComponent,
  TitlePage,
} from './Container.styled';

const Container = ({ children }) => {
  return (
    <ContainerWrap>
      <ContainerComponent>
        <TitlePage>{children}</TitlePage>
      </ContainerComponent>
    </ContainerWrap>
  );
};

export default Container;

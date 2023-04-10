import {
  ContainerWrap,
  ContainerComponent,
  TitlePage,
} from './Container.styled';

const Container = () => {
  return (
    <ContainerWrap>
      <ContainerComponent>
        <TitlePage>TitlePage</TitlePage>
      </ContainerComponent>
    </ContainerWrap>
  );
};

export default Container;

import {
  ContainerWrap,
  ContainerComponent,
  // TitlePage,
} from './Container.styled';

const Container = ({ children }) => {
  return (
    <ContainerWrap>
      <ContainerComponent>
        {children}
        {/* <TitlePage>{children}</TitlePage> */}
      </ContainerComponent>
    </ContainerWrap>
  );
};

export default Container;

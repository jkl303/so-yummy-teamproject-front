import {
  ContainerWrap,
  ContainerComponent,
} from './Container.styled';

const Container = ({ children }) => {
  return (
    <ContainerWrap>
      <ContainerComponent>
        {children}
      </ContainerComponent>
    </ContainerWrap>
  );
};

export default Container;

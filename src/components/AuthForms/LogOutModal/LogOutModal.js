import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { logOut } from 'redux/auth/authOperations';
import {
  Backdrop,
  Button,
  CloseButton,
  ModalWrapper,
  Text,
} from './LogOutModal.styled';

const modalRoot = document.querySelector('#modal-root');

const LogOutModal = handClose => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
      .unwrap()
      .then()
      .catch(error => {
        toast.error(
          'Oops... Something went wrong. Please refresh the page and try again!'
        );
      });

    // handClose(); // handClose - пропс функція компонента "UserAvatar" в Header. UserAvatar рендерить LogOutModal, має стейт "isModalLogOutOpen" та функції ModalLogOutOpen, ModalLogOutClose. ModalLogOutClose передаєтся пропсом через ще один компонет, що містить кнопку відкриття LogOutModal в саму LogOutModal як пропс handClose
  };

  return createPortal(
    <Backdrop>
      <ModalWrapper>
        <CloseButton
          type="button"
          //   onClick={handClose}
        >
          <RxCross2 size={22} />
        </CloseButton>
        <Text>Are you sure you want to log out?</Text>
        <div>
          <Button type="button" onClick={handleLogOut}>
            Log out
          </Button>
          <Button
            type="button"
            // onClick={handClose}
          >
            Cancel
          </Button>
        </div>
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
};

export default LogOutModal;

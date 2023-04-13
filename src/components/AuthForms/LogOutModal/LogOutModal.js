import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { logOut } from 'redux/auth/authOperations';
import {
  Backdrop,
  Button,
  CloseButton,
  CloseButtonIcon,
  ModalWrapper,
  Text,
} from './LogOutModal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function LogOutModal({ handleClose }) {
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

    handleClose();
  };

  return createPortal(
    <Backdrop>
      <ModalWrapper>
        <CloseButton type="button" onClick={handleClose}>
          <CloseButtonIcon size={22} />
        </CloseButton>
        <Text>Are you sure you want to log out?</Text>
        <div>
          <Button type="button" onClick={handleLogOut}>
            Log out
          </Button>
          <Button type="button" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
}

import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { logOut } from 'redux/auth/authOperations';
import {  useEffect } from 'react';
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

   useEffect(() => {
     const handleKeyDown = e => {
       if (e.code === 'Escape') {
         handleClose();
         window.removeEventListener('keydown', handleKeyDown);
       }
     };
     window.addEventListener('keydown', handleKeyDown);
   }, [handleClose]);

   const handleClickBackdrop = e => {
     if (e.target === e.currentTarget) {
      handleClose();
     }
   };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
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

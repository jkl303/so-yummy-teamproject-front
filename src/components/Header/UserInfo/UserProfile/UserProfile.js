import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  FormContainer,
  Button,
  Input,
  Edit,
  User,
  Plus,
  InputWrap,
  InputFileWrap,
  ButtonClose,
  IconClose,
  UserPhoto,
} from './UserProfileStyled';

import {
  Backdrop,
  ModalWrapper,
} from 'components/AuthForms/LogOutModal/LogOutModal.styled';

const modalRoot = document.querySelector('#modal-root');

const UserProfile = ({ name, toggleMenu, avatar, onClose }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setProfilePicture(reader.result);
    };
  }

  const handleSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <ModalWrapper>
        <FormContainer onSubmit={handleSubmit}>
          {profilePicture ? (
            <UserPhoto src={profilePicture} alt={'Profile Picture'} />
          ) : (
            <UserPhoto alt="User's avatar" src={avatar} />
          )}

          <InputFileWrap>
            <Input type="file" accept="image/*" onChange={handleFileUpload} />

            <Plus />
          </InputFileWrap>
          <InputWrap>
            <Input type="text" name="name" placeholder={name} />
            <Edit />
            <User />
          </InputWrap>
          <Button type="submit">Save changes</Button>
          <ButtonClose
            onClick={() => {
              toggleMenu();
            }}
          >
            <IconClose />
          </ButtonClose>
        </FormContainer>
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
};
export default UserProfile;

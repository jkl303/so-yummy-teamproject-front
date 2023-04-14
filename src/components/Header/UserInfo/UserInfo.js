import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

import UserProfile from './UserProfile/UserProfile';
import {
  UserWrap,
  UserAvatar,
  UserName,
  UserNameBlack,
  UserBox,
  Wrap,
  Button,
  ButtonLogout,
  ArrowIcon,
  UserBtnText,
  EditBtn,
} from './UserInfoStyled';

import LogOutModal from 'components/AuthForms/LogOutModal/LogOutModal';

const UserInfo = () => {
  const [userOpenModal, setUserOpenModal] = useState(false);
  const [userEditModal, setUserEditModal] = useState(false);
  const [isLogOutOpenModal, setIsLogOutOpenModal] = useState(false);

  const user = useSelector(selectUser);

  const { name, avatarURL } = user;

  const isMainPage = window.location.pathname.includes('main');
  const isRecipePage = window.location.pathname.includes('recipe');

  const toggleOpenModal = () => {
    setUserOpenModal(!userOpenModal);
  };

  const editProfile = () => {
    setUserEditModal(!userEditModal);
  };

  const logOutOpenModal = () => {
    setIsLogOutOpenModal(true);
    toggleOpenModal();
  };

  const logOutCloseModal = () => {
    setIsLogOutOpenModal(false);
  };

  return (
    <UserWrap>
      <UserBox onClick={toggleOpenModal}>
        <UserAvatar alt="User's avatar" src={avatarURL}></UserAvatar>
        {isMainPage || isRecipePage ? (
          <UserNameBlack>{name}</UserNameBlack>
        ) : (
          <UserName>{name}</UserName>
        )}
      </UserBox>

      {userOpenModal && (
        <Wrap>
          <Button
            onClick={() => {
              editProfile();
              toggleOpenModal();
            }}
          >
            <UserBtnText>Edit profile</UserBtnText>
            <EditBtn />
          </Button>

          <ButtonLogout onClick={() => logOutOpenModal()}>
            Log out
            <ArrowIcon />
          </ButtonLogout>
        </Wrap>
      )}
      {userEditModal && (
        <UserProfile
          toggleMenu={editProfile}
          name={name}
          avatar={avatarURL}
          onClose={editProfile}
        />
      )}
      {isLogOutOpenModal && <LogOutModal handleClose={logOutCloseModal} />}
    </UserWrap>
  );
};

export default UserInfo;

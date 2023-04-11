import { useState } from 'react';
import UserProfile from './UserProfile/UserProfile';
import {
  UserWrap,
  UserAvatar,
  UserName,
  UserBox,
  Wrap,
  Button,
  ButtonLogout,
  ArrowIcon,
} from './UserInfoStyled';

import { FiEdit2 } from 'react-icons/fi';
import User from 'images/svg/user.svg';

const UserInfo = () => {
  const [userOpenModal, setUserOpenModal] = useState(false);
  const [userEditModal, setUserEditModal] = useState(false);
  const [isLogOutOpenModal, setIsLogOutOpenModal] = useState(false);

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

  const name = 'User name';

  return (
    <UserWrap>
      <UserBox onClick={toggleOpenModal}>
        <UserAvatar alt="User's avatar" src={User}></UserAvatar>
        <UserName>{name}</UserName>
      </UserBox>

      {userOpenModal && (
        <Wrap>
          <Button
            onClick={() => {
              editProfile();
              toggleOpenModal();
            }}
          >
            <p>Edit profile</p>
            <FiEdit2 />
          </Button>

          <ButtonLogout onClick={() => logOutOpenModal()}>
            Log out
            <ArrowIcon />
          </ButtonLogout>
        </Wrap>
      )}
      {userEditModal && <UserProfile toggleMenu={editProfile} name={name} />}
    </UserWrap>
  );
};

export default UserInfo;

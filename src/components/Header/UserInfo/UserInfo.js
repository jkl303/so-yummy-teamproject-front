import { useState } from 'react';
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

  const toggleOpenModal = () => {
    setUserOpenModal(!userOpenModal);
  };
  const editProfile = () => {
    toggleOpenModal();
  };

  const logOut = () => {
    toggleOpenModal();
  };
  return (
    <UserWrap>
      <UserBox onClick={toggleOpenModal}>
        <UserAvatar alt="User's avatar" src={User}></UserAvatar>
        <UserName>User name</UserName>
      </UserBox>

      {userOpenModal && (
        <Wrap>
          <Button onClick={() => editProfile()}>
            <p>Edit profile</p>
            <FiEdit2 />
          </Button>

          <ButtonLogout onClick={() => logOut()}>
            Log out
            <ArrowIcon />
          </ButtonLogout>
        </Wrap>
      )}
    </UserWrap>
  );
};

export default UserInfo;

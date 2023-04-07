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
} from "./UserInfoStyled";

// import { ReactComponent as EditBtn } from "../../../images/svg/edit.svg";
// import User from '../../../images/svg/user.svg';
import LogOutModal from "components/AuthForms/LogOutModal/LogOutModal";
import { FiEdit2 } from 'react-icons/fi';
import User from 'images/svg/user.svg';

const UserInfo = () => {
  const [userOpenModal, setUserOpenModal] = useState(false);
  const [isLogOutOpenModal, setIsLogOutOpenModal] = useState(false);

  const toggleOpenModal = () => {
    setUserOpenModal(!userOpenModal);
  };
  const editProfile = () => {
    toggleOpenModal();
  };

  const logOutOpenModal = () => {
    setIsLogOutOpenModal(true);
    toggleOpenModal();
  };

  const logOutCloseModal = () => {
    setIsLogOutOpenModal(false);
  }

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

          <ButtonLogout onClick={() => logOutOpenModal()}>
            Log out
            <ArrowIcon />
          </ButtonLogout>
        </Wrap>
      )}

      {isLogOutOpenModal && <LogOutModal handleClose={logOutCloseModal} />}
    </UserWrap>
  );
};

export default UserInfo;

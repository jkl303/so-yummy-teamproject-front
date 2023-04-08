import { useState } from "react";

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
} from "./UserProfileStyled";

import UserAvatar from "../../../../images/svg/user.svg";

const UserProfile = ({ name, toggleMenu }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setProfilePicture(reader.result);
    };
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <UserPhoto alt="User's avatar" src={UserAvatar} />
      {profilePicture ? (
        <UserPhoto src={profilePicture} alt={"Profile Picture"} />
      ) : (
        <UserPhoto alt="User's avatar" src={UserAvatar} />
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
  );
};
export default UserProfile;

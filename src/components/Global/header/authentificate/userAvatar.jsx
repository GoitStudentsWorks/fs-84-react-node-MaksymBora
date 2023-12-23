import {
  UserName,
  // UserAva,
  UserLogoContainer,
  UserLogoText,
  ProfileBtn,
} from './../header.styled.js';
import icon from './../../../../assets/sprite.svg';
import { ProfileModal } from './../../../HeaderModals/ProfileModal/ProfileModal.jsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../Redux/userAuth/selector.js';
// import { selectAvatarurl } from '../../../../Redux/userAuth/selector.js';

export const UserAvatar = () => {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const user = useSelector(selectUser);

  // const avatar = useSelector(selectAvatarurl);
  // const ava = avatar.avatarUrl;
  const defaultName = user.name ? user.name.slice(0, 1).toUpperCase() : 'A';

  const handleOpenModal = () => {
    setProfileModalOpen((prevState) => !prevState);
  };

  return (
    // name && (
    <UserLogoContainer onClick={handleOpenModal}>
      <UserName>{user.name}</UserName>
      {/* {ava ? (
        <UserAva>{user.name}</UserAva>
      ) : ( */}
      <UserLogoText>
        <p>{defaultName} </p>
      </UserLogoText>
      {/* )} */}

      <ProfileBtn>
        <svg>
          <use href={icon + '#icon-arrow-down'}></use>
        </svg>
      </ProfileBtn>
      {isProfileModalOpen && <ProfileModal onClose={handleOpenModal} />}
    </UserLogoContainer>
  );
  // )
};

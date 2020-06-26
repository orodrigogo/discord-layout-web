import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIonc, HeadPhoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
  <Container>
    <Profile>
      <Avatar>
        <img src="https://avatars0.githubusercontent.com/u/49030804?s=460&u=3dbd06708f28e1132e215182f8fbd3031f5045f1&v=4" alt="Profile Photo"/>
      </Avatar>
      <UserData>
        <strong>Rodrigo Gonçalves</strong>
        <span>#rodrigo</span>
      </UserData>
    </Profile>

    <Icons>
      <MicIonc />
      <HeadPhoneIcon />
      <SettingsIcon />
    </Icons>
   
  </Container>
  )
}

export default UserInfo;
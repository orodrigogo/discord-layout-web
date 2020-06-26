import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIonc, HeadPhoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
  <Container>
    <Profile>
      <Avatar />
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
import React from 'react';

import { Container, HasTagIcon, Title, Separator,  Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
  <Container>    
    <HasTagIcon />

    <Title>chat-livre</Title>

    <Separator />

    <Description>Canal aberto para conversas</Description>
  </Container>
  )
}

export default ChannelInfo;
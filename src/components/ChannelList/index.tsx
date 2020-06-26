import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon   } from './styles';

const ChannelList: React.FC = () => {
  return (
  <Container>
    <Category>
      <span>Canais de texto</span>
      <AddCategoryIcon />
    </Category>

    <ChannelButton channelName="chat-livre" />
    <ChannelButton channelName="react" />
    <ChannelButton channelName="node" />
    <ChannelButton channelName="react-native" />
    <ChannelButton channelName="clean-code" />
  </Container>
  )
}

export default ChannelList;
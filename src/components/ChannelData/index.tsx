import React, { useRef, useEffect } from 'react';

import ChannelMesssage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

   

  },[messagesRef]);



  return (
  <Container>
    <Messages ref={messagesRef}>
      {
        Array.from(Array(15).keys()).map((n) => 
        (
          <ChannelMesssage 
          author="Rodrigo Gonçalves"
          date="26/06/2020"
          content="Falaaa galera. Esse projeto é para treinar layout com Grid e Flexbox, além de utilizar TypeScript"
          />
        ))
      }

      <ChannelMesssage 
        hasMention
        isBot
        author="Fulano"
        date="26/06/2020"
        content={
          <>
          <Mention>@Rodrigo </Mention>, "Muito bom!"
          </>
        }
      />


    </Messages>

    <InputWrapper>
      <Input type="text" placeholder="Conversar em #chat-livre" />
      <InputIcon />
    </InputWrapper>
  </Container>
  )
}

export default ChannelData;
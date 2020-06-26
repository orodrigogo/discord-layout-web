import React from 'react';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}


const ServerButton: React.FC<Props> = ({ 
  selected, 
  isHome, 
  hasNotifications, 
  mentions 
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src="https://avatars0.githubusercontent.com/u/49030804?s=460&u=3dbd06708f28e1132e215182f8fbd3031f5045f1&v=4" alt="Foto" />}
    </Button>
  )
}

export default ServerButton;
import React from 'react';
import {
  AppBar,
  AppBarProps,
  Toolbar,
  useScrollTrigger
} from '@mui/material';

export interface ElevatedAppBarProps extends AppBarProps { }

const ElevatedAppBar: React.FC<ElevatedAppBarProps> = ({
  children, ...otherProps
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(
    <AppBar {...otherProps}>
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>,
    {
      elevation: trigger ? 4 : 0,
      position: trigger ? 'fixed' : 'sticky'
    }
  );
};

export default ElevatedAppBar;

import React from 'react';

declare module '@material-ui/core/Box' {
  interface BoxProps {
    ref?: React.Ref<unknown>;
  }
}

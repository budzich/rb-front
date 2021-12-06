import React from 'react';
import { SvgIcon, makeStyles, BoxProps } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: 32,
    height: 54,
  },
}));

const ControlIcon = ({ className }: BoxProps) => {
  const classes = useStyles();
  const classname = className ? `${classes.root} ${className}` : classes.root;

  return (
    <SvgIcon className={classname} viewBox="0 0 32 54">
      <path
        d="M31.6286 5.01429L27 0L4.62857 21.9857L0 27L27 54L31.6286 48.9857L9.64286 27L31.6286 5.01429Z"
        fill="white" fillOpacity="0.1" />
    </SvgIcon>
  );
};

export default ControlIcon;

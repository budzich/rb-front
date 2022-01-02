import React from 'react';
import { useStyles } from 'components/common/Modal/styles';
import { Box, Modal as ModalBase, ModalProps } from '@material-ui/core';


const Modal = ({ children, ...props }: ModalProps) => {
  const classes = useStyles();

  return (
    <ModalBase {...props}>
      <Box className={classes.root}>
        {children}
      </Box>
    </ModalBase>
  );
};

export default Modal;

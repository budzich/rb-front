import React from 'react';
import {
  Box,
  TextField as TextFieldBase,
  TextFieldProps,
  Typography,
} from '@material-ui/core';
import { useStyles } from 'components/common/TextField/styles';

const TextField = (props: TextFieldProps) => {
  const classes = useStyles();
  const { label, className, inputProps } = props;
  const classname = className ? `${classes.root} ${className}` : classes.root;

  return (
    <Box className={classname}>
      <Typography className={classes.label}>{label}</Typography>
      <TextFieldBase
        {...props}
        label=""
        variant="outlined"
        className={classes.inputWrapper}
        inputProps={{ className: classes.input, ...inputProps }}
      />
    </Box>
  );
};

export default TextField;

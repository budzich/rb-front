import React from 'react';
import { useStyles } from './styles';
import { Box, InputBaseComponentProps, TextFieldProps } from '@material-ui/core';
import TextField from 'components/common/TextField';
import { FormikProps } from 'formik';

interface IProps {
  formik: FormikProps<any>;
  label: string;
  name: string;
  textfieldProps?: TextFieldProps;
  inputProps?: InputBaseComponentProps;
  inputWrapperStyle?: string;
  inputStyle?: string;
  formErrorStyle?: string;
}

const FormikField = (
  {
    formik,
    label,
    name,
    inputWrapperStyle,
    inputStyle,
    formErrorStyle,
    inputProps = {},
    textfieldProps = {},
  }: IProps) => {
  const classes = useStyles();
  const inputWrapper = inputWrapperStyle ? `${classes.inputWrapper} ${inputWrapperStyle}` : classes.inputWrapper;
  const input = inputStyle ? `${classes.input} ${inputStyle}` : classes.input;
  const formError = formErrorStyle ? `${classes.formError} ${formErrorStyle}` : classes.formError;

  return (
    <Box
      className={
        formik.errors[name] && formik.touched[name]
          ? `error ${inputWrapper}`
          : inputWrapper
      }
      flexDirection="column"
    >
      <TextField
        label={label}
        name={name}
        inputProps={{ className: input, ...inputProps }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        {...textfieldProps}
      />
      {formik.errors[name] && formik.touched[name] && (
        <Box component="span" className={formError}>
          {formik.errors[name]}
        </Box>
      )}
    </Box>
  );
};

export default FormikField;

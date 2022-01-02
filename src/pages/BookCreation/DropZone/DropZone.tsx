import React, { useCallback } from 'react';
import { useStyles } from './styles';
import { Box, Paper, RootRef, Typography } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { FormikProps } from 'formik';
import { SUPPORTED_FORMATS } from 'pages/BookCreation/constants';

interface IProps {
  formik: FormikProps<any>;
}

const DropZone = ({ formik }: IProps) => {
  const classes = useStyles();
  const onDrop = useCallback(acceptedFiles => {
    const image: File = acceptedFiles && acceptedFiles[0];
    if (image) {
      formik.setFieldValue('poster', image);
      formik.setFieldTouched('poster', true);
      return;
    }

    formik.setFieldError('poster', 'Что-то пошло не так');
  }, [formik]);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const { ref, ...rootProps } = getRootProps();
  const posterData = formik.values.poster;
  const preview = SUPPORTED_FORMATS.includes(posterData?.type) && URL.createObjectURL(formik.values.poster);

  return (
    <Box className={classes.imageWrapper}>
      <Typography className={classes.sectionTitle}>Обложка</Typography>
      <RootRef rootRef={ref}>
        <Paper {...rootProps} className={classes.image}>
          <input {...getInputProps()} />
          {preview
            ? <img className={classes.uploadedImage} alt="error" src={preview} />
            : <Typography className={classes.dropzone}>Нажмите, чтобы загрузить обложку</Typography>
          }
        </Paper>
      </RootRef>
      {formik.errors.poster && formik.touched.poster && (
        <Box component="span" className={classes.formError}>
          {formik.errors.poster}
        </Box>
      )}
    </Box>
  );
};

export default DropZone;

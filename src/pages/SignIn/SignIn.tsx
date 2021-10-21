import React from 'react';
import { Box, Button, styled, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { FormikConfig, useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authSelectors, authWorkers } from '../../store/auth';
import { AlertBlock } from '../../components/AlertBlock';
import { SignUpFormData, signUpSchema } from './types';

const initialValues: SignUpFormData = {
  email: 'xman@mail.ru',
  password: 'p@ssw0rd',
};

export const SignIn: React.FC = () => {
  const formikConfig: FormikConfig<SignUpFormData> = {
    initialValues,
    onSubmit: (values) => {
      dispatch(authWorkers.authSignUp(values));
    },
    validationSchema: signUpSchema,
  };

  const formik = useFormik(formikConfig);
  const dispatch = useAppDispatch();
  const requestError = useAppSelector(authSelectors.getRequestError);

  return (
    <Wrap>
      <Form
        noValidate
        onSubmit={formik.handleSubmit}
        autoComplete={'off'}
        onReset={() => formik.resetForm()}
      >
        <ElementWrap marginTop={0} center={true}>
          <LockIcon color={'secondary'} />
        </ElementWrap>
        <ElementWrap marginTop={20} center={true}>
          <Title component={'h2'}>SignIn</Title>
        </ElementWrap>
        {requestError ? (
          <ElementWrap marginTop={20}>
            <AlertBlock requestError={requestError} />
          </ElementWrap>
        ) : null}
        <ElementWrap marginTop={20}>
          <TextField
            fullWidth={true}
            label={'email'}
            required={true}
            type={'email'}
            {...formik.getFieldProps('email')}
            helperText={formik.touched.email && formik.errors.email}
            error={Boolean(formik.touched.email && formik.errors.email)}
          />
        </ElementWrap>
        <ElementWrap marginTop={20}>
          <TextField
            type={'password'}
            fullWidth={true}
            label={'пароль'}
            required={true}
            {...formik.getFieldProps('password')}
            helperText={formik.touched.password && formik.errors.password}
            error={Boolean(formik.touched.password && formik.errors.password)}
          />
        </ElementWrap>
        <ElementWrap marginTop={20}>
          <ButtonPanel>
            <Button fullWidth={true} variant={'contained'} type={'submit'}>
              вход
            </Button>
            <Button fullWidth={true} variant={'contained'} type={'reset'}>
              сброс
            </Button>
          </ButtonPanel>
        </ElementWrap>
      </Form>
    </Wrap>
  );
};

const Form = styled('form')`
  width: 100%;
  height: 100%;
`;

const Wrap = styled(Box)`
  max-width: 460px;
  width: 100%;
  min-height: 760px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const ElementWrap = styled(Box)<{
  marginTop: number;
  center?: boolean;
}>`
  margin-top: ${({ marginTop }) => marginTop}px;
  width: 100%;
  display: flex;
  justify-content: ${({ center }) => (center ? 'center' : 'start')};
  //border: 1px solid red;
`;

const Title = styled(Typography)`
  font-size: 150%;
` as typeof Typography;

const ButtonPanel = styled(Box)`
  display: flex;
  width: 100%;

  & > button:not(:last-child) {
    margin-right: 10px;
  }
`;

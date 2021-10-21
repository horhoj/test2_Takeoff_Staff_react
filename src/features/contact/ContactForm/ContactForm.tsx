import React, { useEffect } from 'react';
import { Box, Button, styled, TextField, Typography } from '@mui/material';
import { FormikConfig, useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  contactActions,
  contactSelectors,
  contactWorkers,
} from '../contactReducer';
import { NEW_ITEM_ID } from '../../../config/app';
import { appActions } from '../../../store/app';
import { getPathByName } from '../../../router';
import { Contact, ContactSchema } from '../types';
import { AlertBlock } from '../../../components/AlertBlock';
import { prepareCategoryFormData } from './helpers';
import { ContactFormProps } from './types';

const initialValues: Contact = {
  id: 0,
  first_name: '',
  last_name: '',
  telephone: '',
  address: '',
};

export const ContactForm: React.FC<ContactFormProps> = ({ id }) => {
  const contactResponse = useAppSelector(contactSelectors.getContactResponse);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(contactSelectors.getIsLoading);
  const requestError = useAppSelector(contactSelectors.getRequestError);

  const isNew = id === NEW_ITEM_ID;

  useEffect(() => {
    if (!isNew) {
      dispatch(contactWorkers.fetchData(Number(id)));
    }
    return () => {
      dispatch(contactActions.clear());
    };
  }, []);

  const formikConfig: FormikConfig<Contact> = {
    initialValues: contactResponse
      ? prepareCategoryFormData(contactResponse)
      : initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (isNew) {
        dispatch(contactWorkers.newContact(values));
        return;
      }
      dispatch(contactWorkers.patchData(values));
    },
    validationSchema: ContactSchema,
  };

  const formik = useFormik(formikConfig);

  const handleReturnBtnClk = () => {
    const path = getPathByName('contactList');
    dispatch(appActions.redirect(path));
  };

  return (
    <>
      {requestError ? <AlertBlock requestError={requestError} /> : null}

      <Wrap>
        <WrapElement mt={0}>
          <Typography component={'h2'}>
            {isNew
              ? 'Добавьте новый контакт'
              : `Редактируется контакт с ИД=${id}`}
          </Typography>
          {!isNew && formik.dirty ? (
            <EditDirtyWarning>Данные по контакту изменены!</EditDirtyWarning>
          ) : null}
        </WrapElement>
        <Form
          noValidate
          onSubmit={formik.handleSubmit}
          autoComplete={'off'}
          onReset={() => formik.resetForm()}
        >
          <WrapElement mt={20}>
            <WrapTop>
              <TextField
                disabled={isLoading}
                label={'имя'}
                required={true}
                fullWidth={true}
                {...formik.getFieldProps('first_name')}
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
                error={Boolean(
                  formik.touched.first_name && formik.errors.first_name,
                )}
              />
              <TextField
                disabled={isLoading}
                label={'фамилия'}
                required={true}
                fullWidth={true}
                {...formik.getFieldProps('last_name')}
                helperText={formik.touched.last_name && formik.errors.last_name}
                error={Boolean(
                  formik.touched.last_name && formik.errors.last_name,
                )}
              />
            </WrapTop>
          </WrapElement>
          <WrapElement mt={20}>
            <TextField
              disabled={isLoading}
              label={'телефон'}
              fullWidth={true}
              {...formik.getFieldProps('telephone')}
              helperText={formik.touched.last_name && formik.errors.telephone}
              error={Boolean(
                formik.touched.telephone && formik.errors.telephone,
              )}
            />
          </WrapElement>
          <WrapElement mt={20}>
            <TextField
              disabled={isLoading}
              label={'адрес'}
              fullWidth={true}
              {...formik.getFieldProps('address')}
              helperText={formik.touched.address && formik.errors.address}
              error={Boolean(formik.touched.address && formik.errors.address)}
            />
          </WrapElement>

          <WrapElement mt={20}>
            <ControlPanel>
              <Button
                type={'submit'}
                variant={'contained'}
                disabled={isLoading}
              >
                Сохранить
              </Button>
              <Button
                disabled={isLoading}
                type={'button'}
                variant={'contained'}
                onClick={handleReturnBtnClk}
              >
                Назад
              </Button>
              <Button type={'reset'} variant={'contained'}>
                Сброс
              </Button>
            </ControlPanel>
          </WrapElement>
        </Form>
      </Wrap>
    </>
  );
};

const Wrap = styled(Box)`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

const WrapTop = styled(Box)`
  display: flex;
  flex-wrap: nowrap;

  & > div:not(:last-child) {
    margin-right: 10px;
  }
`;

const WrapElement = styled(Box)<{ mt: number }>`
  margin-top: ${({ mt }) => mt}px;
`;

const ControlPanel = styled(Box)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Form = styled('form')`
  width: 100%;
  height: 100%;
`;

const EditDirtyWarning = styled(Typography)`
  color: ${({ theme }) => theme.palette.error.main};
`;

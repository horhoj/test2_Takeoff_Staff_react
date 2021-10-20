import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  contactListSelectors,
  contactListWorkers,
} from '../contactListReducer';

export const ContactListForm: React.FC = () => {
  const contactListResponse = useAppSelector(
    contactListSelectors.getContactListResponse,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(contactListWorkers.fetchData());
  }, []);

  return (
    <>
      <div>{JSON.stringify(contactListResponse, null, 2)}</div>
      <div>ContactListForm</div>
    </>
  );
};

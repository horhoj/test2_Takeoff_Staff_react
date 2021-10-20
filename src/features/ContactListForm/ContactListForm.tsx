import React, { useEffect } from 'react';
import { Box, Button, Pagination, styled } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  contactListSelectors,
  contactListWorkers,
} from '../contactListReducer';
import { DataGrid } from '../../components/DataGrid';
import { ContactListItemKeys } from '../types';
import { DebouncedInput } from '../../components/DebouncedInput';
import { logger } from '../../utils/logger';
import { FIELD_LIST } from './const';

export const ContactListForm: React.FC = () => {
  const contactListResponse = useAppSelector(
    contactListSelectors.getContactListResponse,
  );
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(contactListSelectors.getIsLoading);
  const requestOptions = useAppSelector(contactListSelectors.getRequestOptions);

  useEffect(() => {
    dispatch(contactListWorkers.fetchData());
  }, []);

  const handlePaginationPageBtnClk = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    dispatch(contactListWorkers.goToPageWorker(page));
  };

  const handleColumnClick = (fieldName: ContactListItemKeys) => {
    dispatch(contactListWorkers.sort(fieldName));
  };

  const handleSearch = (searchStr: string) => {
    dispatch(contactListWorkers.search(searchStr));
  };

  const handleClearSearchResult = () => {
    dispatch(contactListWorkers.search(''));
  };

  const handleUpdateBtnClick = () => {
    dispatch(contactListWorkers.fetchData());
  };

  const handleEditBtnClick = (id: number) => {
    logger('update', id);
  };

  const handleDeleteBtnClick = (id: number) => {
    if (confirm('удалить ?')) {
      logger('delete', id);
    }
  };

  const actionPanelRenderFn = (id: number): JSX.Element => {
    return (
      <Box>
        <ControlPanelButton onClick={() => handleEditBtnClick(id)}>
          <EditIcon color={'warning'} />
        </ControlPanelButton>
        <ControlPanelButton onClick={() => handleDeleteBtnClick(id)}>
          <DeleteIcon color={'error'} />
        </ControlPanelButton>
      </Box>
    );
  };

  return (
    <Wrap>
      {contactListResponse ? (
        <>
          <ControlPanel>
            <ControlPanelButton size={'small'} disabled={isLoading}>
              <AddIcon />
            </ControlPanelButton>
            <ControlPanelButton
              disabled={isLoading}
              onClick={handleUpdateBtnClick}
            >
              <UpdateIcon />
            </ControlPanelButton>
            <ControlPanelButton
              onClick={handleClearSearchResult}
              disabled={isLoading}
            >
              <ClearIcon />
            </ControlPanelButton>
            <DebouncedInput
              disabled={isLoading}
              value={requestOptions.search}
              placeholder={'поиск'}
              delay={600}
              handleSearchCb={handleSearch}
            />
          </ControlPanel>
          <Box>
            <DataGrid
              fieldList={FIELD_LIST}
              rowList={contactListResponse.data}
              numOffset={
                (contactListResponse.current_page - 1) *
                contactListResponse.per_page
              }
              onColumnClick={handleColumnClick}
              sortField={requestOptions.sort_field}
              sortAsc={Boolean(requestOptions.sort_asc)}
              searchStr={requestOptions.search}
              disabled={isLoading}
              actionPanelRenderFn={actionPanelRenderFn}
            />
          </Box>

          <Box>
            <StyledPagination
              size={'small'}
              page={contactListResponse.current_page}
              count={contactListResponse.last_page}
              onChange={handlePaginationPageBtnClk}
            />
          </Box>
        </>
      ) : null}
    </Wrap>
  );
};

const StyledPagination = styled(Pagination)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const ControlPanel = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ControlPanelButton = styled(Button)`
  min-width: 30px;
`;

const Wrap = styled(Box)`
  padding: 20px;
`;

import React from 'react';
import { styled, Table, TableBody } from '@mui/material';
import { DataGridProps } from './types';
import { DataGridHeadRow } from './components/DataGridHeadRow';
import { DataGridRow } from './components/DataGridRow/DataGridRow';

export const DataGrid: React.FC<DataGridProps> = ({
  fieldList,
  rowList,
  numOffset,
  onColumnClick,
  sortField,
  sortAsc,
  searchStr,
  disabled,
  actionPanelRenderFn,
}) => {
  return (
    <Wrap>
      <StyledTable size={'small'}>
        <DataGridHeadRow
          fieldList={fieldList}
          onColumnClick={onColumnClick}
          sortField={sortField}
          sortAsc={sortAsc}
          disabled={disabled}
        />
        <TableBody>
          {rowList.map((row, index) => (
            <DataGridRow
              key={row.id}
              row={row}
              fieldList={fieldList}
              num={numOffset + index + 1}
              searchStr={searchStr}
              actionPanelRenderFn={actionPanelRenderFn}
            />
          ))}
        </TableBody>
      </StyledTable>
    </Wrap>
  );
};

const Wrap = styled('div')`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
  min-width: 1000px;
  width: 100%;
`;

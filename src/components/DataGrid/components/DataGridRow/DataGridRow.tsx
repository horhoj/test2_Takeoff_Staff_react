import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { DataGridRowProps } from './types';
import { CellValue } from './components/CellValue';

export const DataGridRow: React.FC<DataGridRowProps> = ({
  row,
  fieldList,
  num,
  searchStr,
  actionPanelRenderFn,
}) => {
  return (
    <TableRow>
      <TableCell>{num}</TableCell>
      <TableCell>{actionPanelRenderFn(row.id)}</TableCell>
      {fieldList.map((field) => (
        <TableCell key={field.id}>
          <CellValue searchStr={searchStr} value={row[field.name]} />
        </TableCell>
      ))}
    </TableRow>
  );
};

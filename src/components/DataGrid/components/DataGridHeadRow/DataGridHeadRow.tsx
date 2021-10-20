import React from 'react';
import {
  Button,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { DataGridHeadRowProps } from './types';

export const DataGridHeadRow: React.FC<DataGridHeadRowProps> = ({
  fieldList,
  onColumnClick,
  sortField,
  sortAsc,
  disabled,
}) => {
  const sort = (fieldName: string) => {
    if (sortField === fieldName) {
      return sortAsc ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
    }
    return null;
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography component={'span'}>№</Typography>
        </TableCell>
        {fieldList.map((field) => (
          <TableCell key={field.id}>
            <Button
              onClick={() => onColumnClick(field.name)}
              disabled={disabled}
            >
              {field.title} {sort(field.name)}
            </Button>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

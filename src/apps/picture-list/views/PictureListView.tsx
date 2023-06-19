import { useRouter } from 'next/router';

import { css } from '@emotion/react';
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { FilledButton } from '@ureca-corp/ui-kit';

export type PictureTableModel = {
  id: number;
  name: string;
  content: string;
};

export type PictureViewProps = {
  models: PictureTableModel[];
};

export const PictureListView = ({ models }: PictureViewProps) => {
  const router = useRouter();
  const handleTableRowClick = (id: number) => {
    router.push({ pathname: "/detail", query: { id: id } });
  };

  return (
    <div css={st.root}>
      <Stack direction="row" css={st.button_row}>
        <FilledButton>{"생성하기"}</FilledButton>
      </Stack>
      <TableContainer>
        <Table>
          <TableHead css={st.table_head}>
            <TableRow>
              <TableCell>{"ID"}</TableCell>
              <TableCell>{"이름"}</TableCell>
              <TableCell>{"내용"}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {models.map((it, index) => (
              <TableRow key={index} onClick={() => handleTableRowClick(it.id)}>
                <TableCell>{it.id}</TableCell>
                <TableCell>{it.name}</TableCell>
                <TableCell>{it.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const st = {
  root: css`
    padding: 40px;
  `,
  button_row: css`
    justify-content: flex-end;
    margin-bottom: 20px;
  `,
  top_row: css`
    justify-content: space-between;
    margin-bottom: 20px;
  `,
  table_head: css`
    background: #ccc;
  `,
  pagination: css`
    margin-top: 20px;
    justify-content: center;
  `,
};

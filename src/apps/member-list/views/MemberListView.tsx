import { css } from '@emotion/react';
import {
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { FilledButton } from '@ureca-corp/ui-kit';

export type TableDataModel = {
  id: string;
  name: string;
  gender: string;
  age: number;
  createdDate: string;
};

// =================================================================

export type MemberListViewProps = {
  models: TableDataModel[];
};

export const MemberListView = ({ models }: MemberListViewProps) => {
  return (
    <div css={st.root}>
      <Stack direction="row" css={st.top_row}>
        <p>{"회원가입"}</p>

        <FilledButton color="primary">{"생성하기"}</FilledButton>
      </Stack>
      <TableContainer>
        <Table>
          <TableHead css={st.table_head}>
            <TableRow>
              <TableCell>{"번호"}</TableCell>
              <TableCell>{"이름"}</TableCell>
              <TableCell>{"성별"}</TableCell>
              <TableCell>{"나이"}</TableCell>
              <TableCell>{"가입일"}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {models.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.createdDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination css={st.pagination} count={10} />
    </div>
  );
};

const st = {
  root: css`
    padding: 40px;
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

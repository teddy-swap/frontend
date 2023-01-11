import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Typography,
  Box,
  AvatarGroup,
  Avatar,
  Accordion,
  AccordionSummary,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Button from "@mui/material/Button";
import LiquidityTableRow from "./LiquidityTableRow";
import HistoryTableRow from "./HistoryTableRow";

function createData(
  token1: string,
  token2: string,
  action: "swap" | "deposit",
  status: "complete" | "pending" | "cancelled",
  date: string
) {
  return {
    token1,
    token2,
    action,
    status,
    date,
  };
}

const rows = Array(10)
  .fill(0)
  .map((item) =>
    createData("WMTT", "MELDt", "swap", "complete", "January 3, 2023 11:00 AM")
  );

const tableHeadCell = `dark:text-white border-zinc-800 py-2 text-sm px-6`;
const tableCell = `dark:text-white border-zinc-800 text-base px-6`;
const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

export default function HistoryTable() {
  return (
    <TableContainer component={Paper} className="bg-transparent rounded-lg">
      <Table className="dark:bg-zinc-900 dark:text-white border-separate border-spacing-y-1">
        <TableHead>
          <TableRow className="dark:bg-zinc-800">
            <TableCell className={tableHeadCell}>Pair</TableCell>
            <TableCell className={tableHeadCell}>Action</TableCell>
            <TableCell className={tableHeadCell}>Date & Time</TableCell>
            <TableCell className={tableHeadCell}>Status</TableCell>
            <TableCell className={tableHeadCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <HistoryTableRow
              key={`${row.token1}/${row.token2}`}
              row={row}
              action="swap"
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

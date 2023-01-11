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

function createData(
  token1: string,
  token2: string,
  percentage: number,
  tvl: number,
  volume: number,
  apr: number,
  totalLiquidityT1: number,
  totalLiquidityT2: number,
  liquidityT1: number,
  liquidityT2: number,
  priceT1: number,
  priceT2: number
) {
  return {
    token1,
    token2,
    percentage,
    tvl,
    volume,
    apr,
    totalLiquidityT1,
    totalLiquidityT2,
    liquidityT1,
    liquidityT2,
    priceT1,
    priceT2,
  };
}

const rows = Array(10)
  .fill(0)
  .map((item) =>
    createData(
      "WMTT",
      "MELDt",
      0.3,
      52.2,
      4.2,
      3.6,
      26747918,
      134384920,
      16326,
      82021,
      5.024,
      0.19903
    )
  );

const tableHeadCell = `dark:text-white border-zinc-800 py-2 text-sm px-6`;
const tableCell = `dark:text-white border-zinc-800 text-base px-6`;
const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

export default function PoolsOverviewTable() {
  return (
    <TableContainer component={Paper} className="bg-transparent rounded-lg">
      <Table className="dark:bg-zinc-900 dark:text-white border-separate border-spacing-y-1">
        <TableHead>
          <TableRow className="">
            <TableCell className={tableHeadCell}>Pair</TableCell>
            <TableCell className={tableHeadCell}>TVL</TableCell>
            <TableCell className={tableHeadCell}>Volume 24H</TableCell>
            <TableCell className={tableHeadCell}>APR</TableCell>
            <TableCell className={tableHeadCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <LiquidityTableRow
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

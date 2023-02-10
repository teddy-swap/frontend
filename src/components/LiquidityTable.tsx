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
import TableHeadWithInfo from "./TableHeadWithInfo";

const data = [
  {
    token1: "WMTT",
    token2: "MELDt",
    token1ID: "b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    token2ID: "a34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    percentage: 0.3,
    tvl: 52.2,
    volume: 4.2,
    volume7D: 8230456,
    fee: 3.6,
    apr: 122.63,
    totalLiquidityT1: 26747918,
    totalLiquidityT2: 134384920,
    liquidityT1: 16326,
    liquidityT2: 82021,
    priceT1: 5.024,
    priceT2: 0.19903,
  },
  {
    token1: "ADA",
    token2: "TEDY",
    token1ID: "b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    token2ID: "a34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    percentage: 0.3,
    tvl: 52.2,
    volume: 4.2,
    volume7D: 8230456,
    fee: 3.6,
    apr: 122.63,
    totalLiquidityT1: 26747918,
    totalLiquidityT2: 134384920,
    liquidityT1: 16326,
    liquidityT2: 82021,
    priceT1: 5.024,
    priceT2: 0.19903,
  },
  {
    token1: "cBTC",
    token2: "iUSD",
    token1ID: "b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    token2ID: "a34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    percentage: 0.3,
    tvl: 52.2,
    volume: 4.2,
    volume7D: 8230456,
    fee: 3.6,
    apr: 122.63,
    totalLiquidityT1: 26747918,
    totalLiquidityT2: 134384920,
    liquidityT1: 16326,
    liquidityT2: 82021,
    priceT1: 5.024,
    priceT2: 0.19903,
  },
];

const rows = Array(10)
  .fill(0)
  .map((item, i) => data[i % data.length]);

const tableHeadCell = `dark:text-white border-zinc-800 py-2 text-sm px-6`;
const tableCell = `dark:text-white border-zinc-800 text-base px-6`;
const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

export default function LiquidityTable({ overview }: Props) {
  return (
    <TableContainer component={Paper} className="bg-transparent rounded-lg">
      <Table className="dark:bg-zinc-900 dark:text-white border-separate border-spacing-y-1">
        <TableHead>
          <TableRow className="">
            <TableCell className={tableHeadCell}>Pair</TableCell>
            <TableCell className={tableHeadCell}>TVL</TableCell>
            <TableCell className={tableHeadCell}>Volume 24H</TableCell>
            <TableCell className={tableHeadCell}>Volume 7D</TableCell>
            <TableCell className={tableHeadCell}>LP Fee</TableCell>
            <TableCell className={tableHeadCell}>
              <TableHeadWithInfo text="Farm APR" />
            </TableCell>
            <TableCell className={tableHeadCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <LiquidityTableRow
              key={`${row.token1}/${row.token2}`}
              row={row}
              action={overview ? "swap" : "remove"}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

type Props = {
  overview?: boolean;
};

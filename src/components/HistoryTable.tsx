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
import { useNavigate } from "react-router-dom";

// function createData(
//   token1: string,
//   token2: string,
//   action: "swap" | "deposit" | "withdraw",
//   status: "complete" | "pending" | "cancelled",
//   date: string
// ) {
//   return {
//     token1,
//     token2,
//     action,
//     status,
//     date,
//   };
// }

// const rows = [
//   ...Array(3)
//     .fill(0)
//     .map((item) =>
//       createData(
//         "WMTT",
//         "MELDt",
//         "swap",
//         "complete",
//         "January 3, 2023 11:00 AM"
//       )
//     ),
//   ...Array(3)
//     .fill(0)
//     .map((item) =>
//       createData(
//         "WMTT",
//         "MELDt",
//         "deposit",
//         "pending",
//         "January 3, 2023 11:00 AM"
//       )
//     ),
//   ...Array(3)
//     .fill(0)
//     .map((item) =>
//       createData(
//         "WMTT",
//         "MELDt",
//         "withdraw",
//         "cancelled",
//         "January 3, 2023 11:00 AM"
//       )
//     ),
// ];

const data = [
  {
    token1: "WMTT",
    token2: "MELDt",
    token1ID: "b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    token2ID: "a34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    totalStaked: 3873800430,
    emissionsPercentage: 68.2,
    dailyEmission: 8230456,
    yourStake: 12367,
    apr: 122.63,
    farm: "Teddy Farm",
    farmIcon: "🧸",
    pendingT1: 1356,
    pendingT2: 8.36,
    harvestedT1: 12456,
    harvestedT2: 28.63,
    aprT1: 108.63,
    aprT2: 4.35,
    aprFees: 2.33,
    valueT1: 86.0,
    valueT2: 356.24,
    action: "swap",
    dateTime: new Date(),
    status: "complete",
  },
  {
    token1: "ADA",
    token2: "TEDY",
    token1ID: "b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    token2ID: "a34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    totalStaked: 0,
    emissionsPercentage: 68.2,
    dailyEmission: 8230456,
    yourStake: 12367,
    apr: 122.63,
    farm: "Grizzly Farm",
    farmIcon: "🐻",
    pendingT1: 0,
    pendingT2: 0,
    harvestedT1: 12456,
    harvestedT2: 28.63,
    aprT1: 108.63,
    aprT2: 4.35,
    aprFees: 2.33,
    valueT1: 86.0,
    valueT2: 356.24,
    action: "deposit",
    dateTime: new Date(),
    status: "pending",
  },
  {
    token1: "cBTC",
    token2: "iUSD",
    token1ID: "b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    token2ID: "a34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a",
    totalStaked: 0,
    emissionsPercentage: 68.2,
    dailyEmission: 8230456,
    yourStake: 12367,
    apr: 122.63,
    farm: "Polar Farm",
    farmIcon: "🐻‍❄️",
    pendingT1: 1356,
    pendingT2: 8.36,
    harvestedT1: 12456,
    harvestedT2: 28.63,
    aprT1: 108.63,
    aprT2: 4.35,
    aprFees: 2.33,
    valueT1: 86.0,
    valueT2: 356.24,
    action: "withdraw",
    dateTime: new Date(),
    status: "cancelled",
  },
];

const rows = Array(10)
  .fill(0)
  .map((item, i) => data[i % data.length]);

const tableHeadCell = `dark:text-white border-y-2 border-cyan-900/20 py-3 text-sm px-6`;
const tableCell = `dark:text-white border-zinc-800 text-base px-6`;
const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

export default function HistoryTable() {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper} className="bg-transparent rounded-lg">
      <Table className="dark:bg-zinc-900 dark:text-white border-separate border-spacing-y-1">
        <TableHead>
          <TableRow className="dark:bg-cyan-900/10">
            <TableCell className={tableHeadCell}>Pair</TableCell>
            <TableCell className={tableHeadCell}>Action</TableCell>
            <TableCell className={tableHeadCell}>Date & Time</TableCell>
            <TableCell className={tableHeadCell}>Status</TableCell>
            <TableCell className={tableHeadCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, key) => (
              <HistoryTableRow key={key} row={row} action="swap" />
            ))
          ) : (
            <TableRow>
              <TableCell className="border-none" colSpan={5}>
                <Box className="flex flex-col items-center justify-center gap-6 w-full py-20">
                  <img
                    src={`/images/robot.png`}
                    alt="robot"
                    className="h-60 pl-6"
                  />
                  <Typography className="dark:text-white font-medium text-sm text-center">
                    No orders found
                  </Typography>
                  <Button
                    onClick={() => navigate("/swap")}
                    variant="contained"
                    className="w-48 py-3 text-xl font-semibold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded-xl"
                  >
                    Swap
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

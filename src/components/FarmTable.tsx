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
  Tooltip,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Button from "@mui/material/Button";
import LiquidityTableRow from "./LiquidityTableRow";
import FarmTableRow from "./FarmTableRow";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function createData() {
  return {
    token1: "WMTT",
    token2: "MELDt",
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
    totalLiquidityT1: 26747918,
    totalLiquidityT2: 134384920,
    liquidityT1: 16326,
    liquidityT2: 82021,
    priceT1: 5.024,
    priceT2: 0.199,
  };
}

const rows = Array(10)
  .fill(0)
  .map((item) => createData());

const tableHeadCell = `dark:text-white border-zinc-800 py-2 text-sm px-6`;
const tableCell = `dark:text-white border-zinc-800 text-base px-6`;
const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

export default function FarmTable() {
  return (
    <TableContainer component={Paper} className="bg-transparent rounded-lg">
      <Table className="dark:bg-zinc-900 dark:text-white border-separate border-spacing-y-1">
        <TableHead>
          <TableRow className="">
            <TableCell className={tableHeadCell}>Farm</TableCell>
            <TableCell className={tableHeadCell}>Total Staked</TableCell>
            <TableCell className={tableHeadCell}>% of Emissions</TableCell>
            <TableCell className={tableHeadCell}>Daily Emission</TableCell>
            <TableCell className={tableHeadCell}>Your Stake</TableCell>
            <TableCell className={tableHeadCell}>
              <Box className="flex items-center justify-center gap-0">
                <span>APR</span>
                <Tooltip
                  title="Current APR for liquidity providers, including yield farming, trading fees, ADA staking rewards, and triple farm rewards (if applicable)"
                  placement="top"
                  arrow={true}
                  classes={{
                    tooltip: "bg-sky-800 top-3",
                    arrow: "text-sky-800",
                  }}
                >
                  <IconButton>
                    <AiOutlineQuestionCircle className="dark:text-white w-3.5 h-3.5" />
                  </IconButton>
                </Tooltip>
              </Box>
            </TableCell>
            <TableCell className={tableHeadCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <FarmTableRow
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

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
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ILiquidityTableRow {
  row: any;
}

export default function LiquidityTableRow({ row }: ILiquidityTableRow) {
  const tableHeadCell = `dark:text-white border-zinc-800 py-2 text-sm px-6`;
  const tableCell = `dark:text-white border-zinc-800 text-base px-6`;
  const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

  const [show, setShow] = useState(false);
  return (
    <>
      <TableRow
        key={row.token1 + "/" + row.token2}
        sx={{
          "&:not(:last-of-type) td, &:not(:last-of-type) th": {
            borderBottom: show ? 0 : 1,
          },
          // "&:last-child td, &:last-child th": { border: 0 },
        }}
        // sx={{ border: 1 }}
        hover={true}
        onClick={() => setShow(!show)}
        className="cursor-pointer"
      >
        <TableCell className={tableCell} component="th" scope="row">
          <Box className="flex items-center gap-4">
            <AvatarGroup>
              <Avatar
                className={tokenAvatar}
                alt={row.token1}
                src={`images/${row.token1.toLowerCase()}.png`}
              />
              <Avatar
                className={tokenAvatar}
                alt={row.token2}
                src={`images/${row.token2.toLowerCase()}.png`}
              />
            </AvatarGroup>
            <Typography className="font-semibold">
              {row.token1}/{row.token2}
            </Typography>
            <Typography>{row.percentage}%</Typography>
          </Box>
        </TableCell>
        <TableCell className={tableCell}>{row.tvl}M ₳</TableCell>
        <TableCell className={tableCell}>{row.volume}M ₳</TableCell>
        <TableCell className={tableCell}>{row.apr}%</TableCell>
        <TableCell className={tableCell}>
          <Box className="flex justify-end">
            <Button
              variant="outlined"
              className="text-black px-0 border-none hover:bg-gray-50 hover:bg-white/10 rounded-full min-w-[2.5rem] min-h-[2.5rem]"
              classes={{ startIcon: "m-0" }}
              startIcon={
                <KeyboardArrowDownIcon
                  className={`w-5 h-5 text-white transition ${
                    show ? "rotate-180" : "rotate-0"
                  }`}
                />
              }
            />
          </Box>
        </TableCell>
      </TableRow>
      <TableRow
        key={row.token1 + "/" + row.token2 + "-details"}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        {show && (
          <TableCell
            colSpan={5}
            className={`${tableCell} dark:bg-sky-900/10 dark:text-white text-sm py-6`}
          >
            <Grid container spacing={4} className="">
              <Grid xs>
                <Stack className="gap-3">
                  <Typography className="text-xs">Total Liquidity:</Typography>
                  <Stack>
                    <Typography className="text-sm">
                      {row.token1}: {row.totalLiquidityT1.toLocaleString()}
                    </Typography>
                    <Typography className="text-sm">
                      {row.token2}: {row.totalLiquidityT2.toLocaleString()}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid xs>
                <Stack className="gap-3">
                  <Typography className="text-xs">Your Liquidity:</Typography>
                  <Stack>
                    <Typography className="text-sm">
                      {row.token1}: {row.liquidityT1.toLocaleString()}
                    </Typography>
                    <Typography className="text-sm">
                      {row.token2}: {row.liquidityT2.toLocaleString()}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid xs>
                <Stack className="gap-3">
                  <Typography className="text-xs">Price:</Typography>
                  <Stack>
                    <Typography className="text-sm">
                      1 {row.token1} = {row.priceT1.toLocaleString()}{" "}
                      {row.token2}
                    </Typography>
                    <Typography className="text-sm">
                      1 {row.token2} = {row.priceT2.toLocaleString()}{" "}
                      {row.token1}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid xs={5}>
                <Stack gap={2} className="lg:flex-row items-center h-full">
                  <Button
                    variant="contained"
                    className="flex-grow text-base px-6 font-medium capitalize shadow-none bg-emerald-100 dark:bg-sky-900 dark:text-white text-zinc-900 rounded-lg w-full lg:w-40"
                  >
                    Swap
                  </Button>
                  <Button
                    variant="contained"
                    className="flex-grow text-base px-6 font-medium capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded-lg w-full lg:w-40"
                  >
                    Add Liquidity
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </TableCell>
        )}
      </TableRow>
    </>
  );
}

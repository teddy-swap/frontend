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
import { useNavigate } from "react-router-dom";
import { HiBadgeCheck } from "react-icons/hi";

interface ILiquidityTableRow {
  row: any;
  action: "swap" | "remove";
}

export default function FarmTableRow({ row, action }: ILiquidityTableRow) {
  const tableHeadCell = `dark:text-white border-zinc-800 py-2 text-sm px-6`;
  const tableCell = `dark:text-white border-zinc-800 text-sm px-6 font-medium`;
  const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;
  const pendingTokenAvatar = `dark:bg-zinc-900 h-6 w-6 border-none`;
  const aprTokenAvatar = `dark:bg-zinc-900 h-5 w-5 border-none`;

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
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
                className={tokenAvatar + " z-10"}
                alt={row.token2}
                src={`images/${row.token2.toLowerCase()}.png`}
              />
            </AvatarGroup>
            <Typography className="font-semibold">
              {row.token1}/{row.token2}
            </Typography>
            <HiBadgeCheck className="w-5 h-5" />
          </Box>
        </TableCell>
        <TableCell className={tableCell}>
          {row.totalStaked.toLocaleString()} LP
        </TableCell>
        <TableCell className={tableCell + " text-center"}>
          {row.emissionsPercentage}%
        </TableCell>
        <TableCell className={tableCell}>
          {row.dailyEmission.toLocaleString()} TEDY
        </TableCell>
        <TableCell className={tableCell}>
          {row.yourStake.toLocaleString()} LP
        </TableCell>
        <TableCell className={tableCell}>
          <Box className="flex flex-col items-end">
            <Box className="flex gap-1 items-center">
              <span className="text-xl">{row.farmIcon}</span>
              <span className="text-xs">{row.farm}</span>
            </Box>
            <Box className="flex gap-2 items-center">
              <Typography className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
                {row.apr}%
              </Typography>
              <AvatarGroup className="">
                <Avatar
                  className={aprTokenAvatar}
                  alt={row.token1}
                  src={`images/${row.token1.toLowerCase()}.png`}
                />
                <Avatar
                  className={aprTokenAvatar + " z-10"}
                  alt={row.token2}
                  src={`images/${row.token2.toLowerCase()}.png`}
                />
              </AvatarGroup>
            </Box>
          </Box>
        </TableCell>
        <TableCell className={tableCell}>
          <Box className="flex justify-end">
            <Button
              variant="outlined"
              className="text-black px-0 border-none hover:bg-gray-50 hover:bg-white/10 rounded-full min-w-[2.5rem] min-h-[2.5rem]"
              classes={{ startIcon: "m-0" }}
              startIcon={
                <KeyboardArrowDownIcon
                  className={`w-5 h-5 text-sky-600 transition ${
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
            colSpan={7}
            className={`${tableCell} dark:bg-sky-900/10 dark:text-white text-sm py-6`}
          >
            <Grid container spacing={2} className="w-full">
              <Grid xs>
                <Stack className="gap-3">
                  <Box className="flex gap-2">
                    <Avatar
                      className={pendingTokenAvatar}
                      alt={row.token1}
                      src={`images/${row.token1.toLowerCase()}.png`}
                    />
                    <Stack gap={0.25}>
                      <Typography className="text-xs text-zinc-400">
                        Pending {row.token1}
                      </Typography>
                      <Typography className="font-medium text-sm text-sky-500">
                        {row.pendingT1.toLocaleString()}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box className="flex gap-2">
                    <Avatar
                      className={pendingTokenAvatar}
                      alt={row.token2}
                      src={`images/${row.token2.toLowerCase()}.png`}
                    />
                    <Stack gap={0.25}>
                      <Typography className="text-xs text-zinc-400">
                        Pending {row.token2}
                      </Typography>
                      <Typography className="font-medium text-sm text-sky-500">
                        {row.pendingT2.toLocaleString()}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
              <Grid xs>
                <Stack className="gap-3">
                  <Box className="flex gap-2">
                    <Stack gap={0.25}>
                      <Typography className="text-xs text-zinc-400">
                        Harvested
                      </Typography>
                      <Typography className="font-medium text-sm text-white">
                        {row.harvestedT1.toLocaleString()}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box className="flex gap-2">
                    <Stack gap={0.25}>
                      <Typography className="text-xs text-zinc-400">
                        Harvested
                      </Typography>
                      <Typography className="font-medium text-sm text-white">
                        {row.harvestedT2.toLocaleString()}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
              <Grid xs={5}>
                <Stack gap={2} className="lg:flex-row items-center h-full">
                  <Button
                    onClick={() =>
                      navigate(action === "remove" ? "remove" : "/swap")
                    }
                    variant="contained"
                    className="flex-grow text-base px-6 font-medium capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded-md w-full lg:w-40"
                  >
                    Harvest
                  </Button>
                  <Button
                    onClick={() => navigate("add")}
                    variant="contained"
                    className="flex-grow text-base px-6 font-medium capitalize shadow-none bg-emerald-100 dark:bg-white/5 dark:text-white text-zinc-900 rounded-md w-full lg:w-40"
                  >
                    Withdraw
                  </Button>
                  <Button
                    onClick={() => navigate("add")}
                    variant="contained"
                    className="flex-grow text-base px-6 font-medium capitalize shadow-none bg-emerald-100 dark:bg-cyan-600 dark:text-white text-zinc-900 rounded-md w-full lg:w-40"
                  >
                    Stake
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

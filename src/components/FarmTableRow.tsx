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
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Button from "@mui/material/Button";
import { useState, MouseEventHandler } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { HiBadgeCheck } from "react-icons/hi";
import { MdInfo } from "react-icons/md";
import Modal, { useModal } from "./Modal";
import RemoveLiquidity from "../routes/RemoveLiquidity";
import StakeModal from "./StakeModal";
import ConfirmLiquidityView from "./ConfirmLiquidityView";
import TransactionSnackbar from "./TransactionSnackbar";
import WaitingModal from "./WaitingModal";
import WithdrawModal from "./WithdrawModal";
import TokenAvatar from "./TokenAvatar";
import TokenAvatarGroup from "./TokenAvatarGroup";
import TokenGroup from "./TokenGroup";
import APR from "./APR";

interface Props {
  row: any;
}

export default function FarmTableRow({ row }: Props) {
  const tableHeadCell = `dark:text-white border-zinc-800 py-2 text-sm px-6`;
  const tableCell = `dark:text-white border-zinc-800 text-sm px-6 font-medium`;
  const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;
  const pendingTokenAvatar = `dark:bg-zinc-900 h-6 w-6 border-none`;
  const aprTokenAvatar = `dark:bg-zinc-900 h-5 w-5 border-none`;

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rowData, setRowData] = useState(row);
  // const [pendingT1, setPendingT1] = useState(row.pendingT1);
  // const [harvestedT1, setHarvestedT1] = useState(rowData.harvestedT1);
  // const [pendingT2, setPendingT2] = useState(row.pendingT2);
  // const [harvestedT2, setHarvestedT2] = useState(rowData.harvestedT2);
  const navigate = useNavigate();
  const [
    confirmRemoveLiquidityOpen,
    handleConfirmRemoveLiquidityOpen,
    handleConfirmRemoveLiquidityClose,
  ] = useModal();
  const [stakeWaitingOpen, handleStakeWaitingOpen, handleStakeWaitingClose] =
    useModal();
  const [
    withdrawWaitingOpen,
    handleWithdrawWaitingOpen,
    handleWithdrawWaitingClose,
  ] = useModal();
  const [
    harvestWaitingOpen,
    handleHarvestWaitingOpen,
    handleHarvestWaitingClose,
  ] = useModal();
  const [stakeOpen, handleStakeOpen, handleStakeClose] = useModal();
  const [withdrawOpen, handleWithdrawOpen, handleWithdrawClose] = useModal();
  const [snackbarOpen, handleSnackbarOpen, handleSnackbarClose] = useModal();

  const handleStakeWaitingComplete = () => {
    handleStakeWaitingClose();
    handleStakeClose();
    handleSnackbarOpen();
  };

  const handleWithdrawWaitingComplete = () => {
    handleWithdrawWaitingClose();
    handleWithdrawClose();
    handleSnackbarOpen();
  };

  const handleHarvestWaitingComplete = () => {
    handleHarvestWaitingClose();
    handleSnackbarOpen();
    setRowData((rowData: any) => ({
      ...rowData,
      pendingT1: 0,
      pendingT2: 0,
      harvestedT1: rowData.harvestedT1 + row.pendingT1,
      harvestedT2: rowData.harvestedT2 + row.pendingT2,
    }));
  };

  const handleClick: MouseEventHandler<HTMLTableRowElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    setShow(!show);
  };
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
        onClick={handleClick}
        className="cursor-pointer"
      >
        <TableCell className={tableCell} component="th" scope="row">
          <TokenGroup
            token1={row.token1}
            token2={row.token2}
            token1ID={row.token1ID}
            token2ID={row.token2ID}
          />
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
          <APR
            extended={true}
            farm={row.farm}
            farmIcon={row.farmIcon}
            apr={row.apr}
            token1={row.token1}
            token2={row.token2}
            token1ID={row.token1ID}
            token2ID={row.token2ID}
            aprT1={row.aprT1}
            aprT2={row.aprT2}
            aprFees={row.aprFees}
          />
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
                        {rowData.pendingT1.toLocaleString()}
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
                        {rowData.pendingT2.toLocaleString()}
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
                        {rowData.harvestedT1.toLocaleString()}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box className="flex gap-2">
                    <Stack gap={0.25}>
                      <Typography className="text-xs text-zinc-400">
                        Harvested
                      </Typography>
                      <Typography className="font-medium text-sm text-white">
                        {rowData.harvestedT2.toLocaleString()}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
              <Grid xs={5}>
                <Stack gap={2} className="lg:flex-row items-center h-full">
                  <Button
                    onClick={handleHarvestWaitingOpen}
                    variant="contained"
                    disabled={!rowData.pendingT1 && !rowData.pendingT2}
                    className={`tableRow_button`}
                  >
                    Harvest
                  </Button>
                  <Button
                    onClick={handleWithdrawOpen}
                    variant="contained"
                    className={`tableRow_button dark:bg-white/5`}
                  >
                    Withdraw
                  </Button>
                  <Button
                    onClick={handleStakeOpen}
                    variant="contained"
                    className={`tableRow_button dark:bg-cyan-600`}
                  >
                    Stake
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </TableCell>
        )}
      </TableRow>
      <StakeModal
        onBack={handleStakeClose}
        open={stakeOpen}
        token1={row.token1}
        token2={row.token2}
        stakedTokens={row.totalStaked}
        waitingOpen={stakeWaitingOpen}
        onWaitingOpen={handleStakeWaitingOpen}
        onWaitingComplete={handleStakeWaitingComplete}
      />
      <WithdrawModal
        onBack={handleWithdrawClose}
        open={withdrawOpen}
        token1={row.token1}
        token2={row.token2}
        stakedTokens={row.totalStaked}
        waitingOpen={withdrawWaitingOpen}
        onWaitingOpen={handleWithdrawWaitingOpen}
        onWaitingComplete={handleWithdrawWaitingComplete}
      />
      <WaitingModal
        open={harvestWaitingOpen}
        onClose={handleHarvestWaitingComplete}
        text={`Harvest ${row.pendingT1.toLocaleString()} ${
          row.token1
        } / ${row.pendingT2.toLocaleString()} ${row.token2}`}
      />
      <TransactionSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        success={true}
      />
    </>
  );
}

import { useEffect, useState, ReactNode } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneIcon from "../assets/TuneIcon";
import SwapCurrencyInput from "./SwapCurrencyInput";
import {
  Button,
  Box,
  TextField,
  Stack,
  CircularProgress,
  InputLabel,
  AvatarGroup,
  Avatar,
  Slider,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SwapIcon from "../assets/SwapIcon";
import Modal, { useModal } from "./Modal";
import { useDarkMode } from "../contexts";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import TickCircleIcon from "../assets/TickCircleIcon";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import InfoRow from "./InfoRow";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import ConfirmLiquidityView from "./ConfirmLiquidityView";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";
import TokensImageGroup from "./TokensImageGroup";
import { AiFillWarning } from "react-icons/ai";
import WaitingModal from "./WaitingModal";
import HistoryTable from "./HistoryTable";
import HistoryTableRow from "./HistoryTableRow";
import dayjs from "dayjs";

const HistoryModal = (props: Props) => {
  const { darkMode } = useDarkMode();
  const transactions = [
    {
      type: "Stake LP",
      id: "0061a3995e044e2947...62024ce4b4a33",
      date: new Date(),
    },
    {
      type: "Stake LP",
      id: "0061a3995e044e2947...62024ce4b4a33",
      date: new Date(),
    },
    {
      type: "Stake LP",
      id: "0061a3995e044e2947...62024ce4b4a33",
      date: new Date(),
    },
  ];

  const tableHeadCell = `text-white border-none py-3 text-sm px-6`;
  const tableCell = `dark:text-white border-zinc-800 text-base px-6`;
  const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

  return (
    <Modal
      headerTitle="Transaction History"
      onClose={props.onClose}
      open={props.open}
      autoWidth
    >
      <Stack className="items-center space-y-8 p-0">
        <Table className="dark:bg-zinc-900 dark:text-white border-separate border-spacing-y-1">
          <TableHead className="">
            <TableRow className="bg-cyan-900/20 overflow-hidden rounded-xl">
              <TableCell className={tableHeadCell}>Transaction</TableCell>
              <TableCell className={tableHeadCell + ` text-center`}>
                Transaction ID
              </TableCell>
              <TableCell className={tableHeadCell + ` text-right`}>
                Deadline
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.length > 0 ? (
              transactions.map((transaction, key) => (
                <>
                  <TableRow>
                    <TableCell
                      className={`tableCell border-none dark:border-zinc-800`}
                      component="th"
                      scope="row"
                    >
                      {transaction.type}
                    </TableCell>
                    <TableCell
                      className={`tableCell border-none dark:border-zinc-800`}
                    >
                      {transaction.id}
                    </TableCell>
                    <TableCell
                      className={`tableCell border-none dark:border-zinc-800`}
                    >
                      <Typography>
                        {dayjs(transaction.date).format("YYYY-MM-DD HH:MM")}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </>
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
                      onClick={() => null}
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
      </Stack>
    </Modal>
  );
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export default HistoryModal;

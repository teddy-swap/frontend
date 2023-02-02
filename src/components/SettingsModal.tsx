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

const SettingsModal = (props: Props) => {
  const { darkMode } = useDarkMode();

  const [amount, setAmount] = useState(0);

  const tolerances = [0.1, 0.5, 1];

  return (
    <Modal headerTitle="Settings" onClose={props.onClose} open={props.open}>
      <Stack className="items-center space-y-8 p-0">
        <Stack className="w-full gap-4">
          <InputLabel
            className={`ml-2 text-sm ${darkMode ? "text-zinc-400" : ""}`}
          >
            Slippage Tolerance
          </InputLabel>
          <Stack direction={"row"} gap={2}>
            {tolerances.map((tolerance) => (
              <Button
                onClick={() => setAmount(tolerance)}
                variant="outlined"
                className={`${
                  darkMode ? "text-white" : ""
                } rounded-xl flex-1 py-2 text-lg disabled:opacity-40 ${
                  amount === tolerance
                    ? darkMode
                      ? "bg-sky-700 border-white"
                      : ""
                    : darkMode
                    ? "bg-zinc-800 border-zinc-700"
                    : ""
                }`}
              >
                {tolerance}%
              </Button>
            ))}
          </Stack>
          <Box
            className={`${
              darkMode ? "text-white" : ""
            } rounded-xl flex justify-between p-3 text-lg disabled:opacity-40 ${
              darkMode ? "bg-zinc-800 border-zinc-700" : ""
            }`}
          >
            <Typography>{amount}</Typography>
            <Typography>%</Typography>
          </Box>
        </Stack>
      </Stack>
    </Modal>
  );
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export default SettingsModal;

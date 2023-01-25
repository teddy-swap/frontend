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

const StakeView = (props: Props) => {
  const { darkMode } = useDarkMode();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [
    confirmRemoveLiquidityOpen,
    handleConfirmRemoveLiquidityOpen,
    handleConfirmRemoveLiquidityClose,
  ] = useModal();
  const [waitingOpen, handleWaitingOpen, handleWaitingClose] = useModal();
  const [snackbarOpen, handleSnackbarOpen, handleSnackbarClose] = useModal();
  const [snackbarHover, setSnackbarHover] = useState(false);

  const navigate = useNavigate();

  const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

  const [amount, setAmount] = useState(0);

  const handleSliderChange = (e: Event) => {
    const { value } = e.target as HTMLInputElement;
    setAmount(parseInt(value));
  };

  const sliderButtons = [25, 50, 75, 100];

  const getStakedAmount = () =>
    ((props.totalStaked * amount) / 100).toLocaleString();

  return (
    <>
      <Stack className="items-center space-y-8 p-0">
        <Box className="flex items-center w-full gap-4">
          <TokensImageGroup token1={props.token1} token2={props.token2} />
          <Typography
            className={`font-semibold text-xl ${darkMode ? "text-white" : ""}`}
          >
            {props.token1}/{props.token2} - LP
          </Typography>
        </Box>
        <Stack className="w-full gap-4">
          <InputLabel
            className={`ml-2 text-sm ${darkMode ? "text-zinc-400" : ""}`}
          >
            Amount
          </InputLabel>
          <Typography
            className={`text-center text-3xl font-medium ${
              darkMode ? "text-white" : ""
            }`}
          >
            {getStakedAmount()}
          </Typography>
          <Slider
            disabled={props.totalStaked === 0}
            aria-label=""
            defaultValue={25}
            valueLabelDisplay="auto"
            step={25}
            value={amount}
            onChange={handleSliderChange}
            marks
            min={0}
            max={100}
            className={`w-[calc(100%_-_20px)] ml-2.5 ${
              darkMode ? "text-zinc-300" : ""
            } ${props.totalStaked === 0 ? "opacity-50" : "opacity-100"}`}
            classes={{
              mark: `w-2.5 h-2.5 rounded-full opacity-100 ${
                darkMode ? "" : ""
              }`,
              track: `${darkMode ? "text-sky-700" : ""}`,
              markActive: `opacity-100 ${darkMode ? "bg-sky-600" : ""}`,
              rail: "opacity-100",
              thumb: `border-4 opacity-100 h-6 w-6 ${
                darkMode ? "bg-zinc-900 border-sky-700" : ""
              }`,
            }}
          />
          <Stack direction={"row"} gap={2}>
            {sliderButtons.map((button) => (
              <Button
                onClick={() => setAmount(button)}
                variant="outlined"
                disabled={props.totalStaked === 0}
                className={`${
                  darkMode ? "text-white" : ""
                } rounded-xl flex-1 py-2 text-lg disabled:opacity-40 ${
                  amount === button
                    ? darkMode
                      ? "bg-sky-700 border-white"
                      : ""
                    : darkMode
                    ? "bg-zinc-800 border-zinc-700"
                    : ""
                }`}
              >
                {button}%
              </Button>
            ))}
          </Stack>
        </Stack>

        <Box className="w-full">
          {props.totalStaked === 0 ? (
            <Typography className="text-red-600 text-sm text-center">
              No tokens to stake ADA / USDA LP. You can Add Liquidity
            </Typography>
          ) : (
            <Box className="messageBox">
              <AiFillWarning className="text-yellow-500 w-6 h-6" />
              <Typography className="font-medium text-sm">
                Each Stake or Withdraw action will automatically harvest your
                reward!
              </Typography>
            </Box>
          )}
        </Box>
        <Stack className="gap-4 w-full">
          {props.totalStaked === 0 && (
            <Button
              onClick={handleConfirmRemoveLiquidityOpen}
              variant="contained"
              className={`w-full py-4 text-xl font-semibold capitalize shadow-none rounded-xl disabled:opacity-40 transition ${
                darkMode
                  ? "bg-sky-700 text-white"
                  : "bg-emerald-100 text-zinc-900"
              }`}
            >
              Add Liquidity
            </Button>
          )}
          <Button
            onClick={props.onWaitingOpen}
            variant="contained"
            disabled={amount === 0}
            className={`w-full py-4 text-xl font-semibold capitalize shadow-none rounded-xl disabled:opacity-40 transition ${
              darkMode
                ? "bg-sky-700 text-white"
                : "bg-emerald-100 text-zinc-900"
            }`}
          >
            Stake
          </Button>
        </Stack>
      </Stack>
      <WaitingModal
        open={props.waitingOpen}
        onClose={props.onWaitingComplete}
        text={`Stake ${getStakedAmount()} ${props.token1} / ${props.token2} LP`}
      />
    </>
  );
};

interface Props {
  token1: string;
  token2: string;
  totalStaked: number;
  waitingOpen: boolean;
  onWaitingOpen: () => void;
  onWaitingComplete: () => void;
}

export default StakeView;

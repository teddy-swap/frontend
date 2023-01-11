import { useEffect, useState, ReactNode } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneIcon from "../assets/TuneIcon";
import SwapCurrencyInput from "../components/SwapCurrencyInput";
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
import Modal, { useModal } from "../components/Modal";
import { useDarkMode } from "../contexts";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import TickCircleIcon from "../assets/TickCircleIcon";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import InfoRow from "../components/InfoRow";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import ConfirmLiquidityView from "../components/ConfirmLiquidityView";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";

export default function RemoveLiquidity() {
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

  useEffect(() => {
    if (waitingOpen) {
      setTimeout(() => {
        handleWaitingClose();
        handleConfirmRemoveLiquidityClose();
        handleSnackbarOpen();
      }, 3000);
    }
  }, [waitingOpen]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      snackbarOpen && !snackbarHover && handleSnackbarClose();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [snackbarOpen, snackbarHover]);

  const navigate = useNavigate();

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

  const row = createData(
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
  );

  const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

  const [amount, setAmount] = useState(50);

  const handleSliderChange = (e: Event) => {
    const { value } = e.target as HTMLInputElement;
    setAmount(parseInt(value));
  };

  const sliderButtons = [25, 50, 75, 100];

  return (
    <Card className="z-10 max-w-md p-6 space-y-4 border border-gray-200 shadow-lg dark:border-zinc-900 rounded-xl dark:bg-zinc-900">
      <CardHeader
        action={
          <IconButton onClick={() => navigate("/liquidity")} aria-label="tune">
            <ArrowBackOutlinedIcon className="w-6 h-6 dark:text-white" />
          </IconButton>
        }
        title="Remove Liquidity"
        classes={{
          title: "font-semibold text-lg text-center",
          action: "absolute top-[-2px] left-0",
        }}
        className="p-0 dark:text-white flex items-center relative border-b dark:border-zinc-800 pb-4"
      />
      <CardContent className="flex flex-col items-center space-y-8 p-0">
        <Box className="flex items-center w-full gap-4">
          <AvatarGroup>
            <Avatar
              className={`tokenAvatar border-none`}
              alt={row.token1}
              src={`/images/${row.token1.toLowerCase()}.png`}
            />
            <Avatar
              className={`tokenAvatar border-none`}
              alt={row.token2}
              src={`/images/${row.token2.toLowerCase()}.png`}
            />
          </AvatarGroup>
          <Typography className="font-semibold dark:text-white">
            {row.token1}/{row.token2}
          </Typography>
        </Box>
        <Stack className="w-full gap-2">
          <InputLabel className="ml-2 text-sm dark:text-zinc-400">
            Amount
          </InputLabel>
          <Typography className="text-center text-4xl font-medium dark:text-white">
            {amount}%
          </Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={25}
            valueLabelDisplay="auto"
            step={25}
            value={amount}
            onChange={handleSliderChange}
            marks
            min={0}
            max={100}
            className="w-96 dark:text-sky-700 mx-1"
            classes={{
              markActive: "dark:bg-sky-600 opacity-100",
              mark: "w-2.5 h-2.5 rounded-full dark:bg-zinc-100 opacity-100",
              rail: "dark:bg-zinc-300 opacity-100",
              thumb: "dark:bg-zinc-900 border-2 border-sky-700 opacity-100",
            }}
          />
          <Stack direction={"row"} gap={2}>
            {sliderButtons.map((button) => (
              <Button
                onClick={() => setAmount(button)}
                variant="outlined"
                className={` dark:text-white rounded-xl flex-1 py-2 text-base ${
                  amount === button
                    ? "dark:bg-sky-700 dark:border-white"
                    : "dark:bg-zinc-800 dark:border-zinc-700"
                }`}
              >
                {button}%
              </Button>
            ))}
          </Stack>
        </Stack>

        <Box className="w-full">
          <InputLabel className="mb-1 ml-2 text-sm dark:text-zinc-400">
            Assets to Remove
          </InputLabel>
          <Box className="infoBox">
            <InfoRow title="TEDY" content="3400.45 (~$345.67)" />
            <InfoRow title="iUSD" content="345.67 (~$345.67)" />
          </Box>
        </Box>
        <Button
          onClick={handleConfirmRemoveLiquidityOpen}
          variant="contained"
          className="w-full py-4 text-xl font-semibold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded-xl"
        >
          Remove Liquidity
        </Button>
      </CardContent>
      <Modal
        headerTitle="Confirm Remove Liquidity"
        onClose={handleConfirmRemoveLiquidityClose}
        open={confirmRemoveLiquidityOpen}
      >
        <ConfirmLiquidityView
          onOpen={handleWaitingOpen}
          token1={row.token1}
          token2={row.token2}
          type="remove"
        />
      </Modal>
      <Modal
        headerTitle="Waiting for confirmation"
        onClose={handleWaitingClose}
        open={waitingOpen}
      >
        <Stack className="w-full py-6 items-center gap-3">
          <CircularProgress className="my-6" size={100} />
          <Typography className={`${darkMode ? "text-white" : ""}`}>
            Swapping 2,000 ADA for 22.309498 cNETA
          </Typography>
          <Typography className={`text-sm ${darkMode ? "text-white" : ""}`}>
            Confirm this transaction in your wallet
          </Typography>
        </Stack>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="I love snacks"
        key={"top right"}
        className="top-16 right-10"
        onMouseOver={() => setSnackbarHover(true)}
        onMouseLeave={() => setSnackbarHover(false)}
      >
        <Alert
          icon={false}
          severity="success"
          onClose={handleSnackbarClose}
          className="w-full dark:bg-zinc-900 dark:text-white rounded-lg shadow-lg"
        >
          <Box className="flex items-center gap-3 p-2">
            <Box>
              <TickCircleIcon className="w-24 h-24 text-sky-500" />
            </Box>
            <Stack className="gap-2 flex-start">
              <Typography className="font-semibold">
                Transaction Succeeded
              </Typography>
              <Button
                className="text-xs px-0 w-36 capitalize border-zinc-700 text-sky-500"
                variant="outlined"
                onClick={() => null}
              >
                View on Explorer
              </Button>
            </Stack>
          </Box>
        </Alert>
      </Snackbar>
    </Card>
  );
}

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
import { Button, Box, TextField, Stack, CircularProgress } from "@mui/material";
import SwapIcon from "../assets/SwapIcon";
import Modal, { useModal } from "../components/Modal";
import { useDarkMode } from "../contexts";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import TickCircleIcon from "../assets/TickCircleIcon";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import InfoRow from "../components/InfoRow";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import ConfirmAddLiquidityView from "../components/ConfirmLiquidityView";

export default function AddLiquidity() {
  const { darkMode } = useDarkMode();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [
    confirmAddLiquidityOpen,
    handleConfirmAddLiquidityOpen,
    handleConfirmAddLiquidityClose,
  ] = useModal();
  const [waitingOpen, handleWaitingOpen, handleWaitingClose] = useModal();
  const [snackbarOpen, handleSnackbarOpen, handleSnackbarClose] = useModal();
  const [snackbarHover, setSnackbarHover] = useState(false);

  useEffect(() => {
    if (waitingOpen) {
      setTimeout(() => {
        handleWaitingClose();
        handleConfirmAddLiquidityClose();
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

  return (
    <Card className="z-10 max-w-md p-6 space-y-4 border border-gray-200 shadow-lg dark:border-zinc-900 rounded-xl dark:bg-zinc-900">
      <CardHeader
        action={
          <IconButton aria-label="tune">
            <TuneIcon className="w-6 h-6 dark:text-white" />
          </IconButton>
        }
        title="Add Liquidity"
        classes={{ title: "font-semibold text-xl" }}
        className="p-0 dark:text-white"
      />
      <CardContent className="flex flex-col items-center space-y-3 p-0">
        <SwapCurrencyInput
          label="First Token"
          placeholder="2,000"
          defaultValue={0.0263}
          currency="ADA"
          equivValue={625.81}
          equivCurrency="$"
          balance={3400.625435}
        />
        <Button
          variant="outlined"
          className="text-black px-0 border border-gray-300 dark:border-zinc-400 hover:bg-gray-50 hover:bg-white/10 rounded-full min-w-[2.5rem] min-h-[2.5rem]"
          classes={{ startIcon: "m-0" }}
          startIcon={<AddOutlinedIcon className="w-5 h-5 text-white" />}
        />
        <SwapCurrencyInput
          label="Second Token"
          placeholder="622.63"
          defaultValue={439.75}
          currency="iUSD"
          equivValue={622.63}
          equivCurrency="$"
          balance={236.42}
        />
        <Button
          onClick={handleConfirmAddLiquidityOpen}
          variant="contained"
          className="w-full py-4 text-xl font-semibold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded-xl"
        >
          Add Liquidity
        </Button>

        <Box className="infoBox">
          <InfoRow title="Share of Pool" content="~0.02%" />
          <InfoRow title="Total Fees" content="1.95 ADA" />
          <InfoRow
            title="1 iUSD = 23.9 TEDY"
            content="Reverse Rate"
            icon={() => <SwapHorizOutlinedIcon />}
          />
        </Box>
      </CardContent>
      <Modal
        headerTitle="Confirm Add Liquidity"
        onClose={handleConfirmAddLiquidityClose}
        open={confirmAddLiquidityOpen}
      >
        <ConfirmAddLiquidityView
          onOpen={handleWaitingOpen}
          token1={row.token1}
          token2={row.token2}
          type="add"
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

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
import { useRecoilState } from "recoil";
import { connectedWalletState } from "../contexts/recoil";

export default function Swap() {
  const { darkMode } = useDarkMode();

  const [connectedWallet, setConnectedWallet] =
    useRecoilState(connectedWalletState);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [confirmSwapOpen, handleConfirmSwapOpen, handleConfirmSwapClose] =
    useModal();
  const [waitingOpen, handleWaitingOpen, handleWaitingClose] = useModal();
  const [snackbarOpen, handleSnackbarOpen, handleSnackbarClose] = useModal();

  useEffect(() => {
    if (waitingOpen) {
      setTimeout(() => {
        handleWaitingClose();
        handleConfirmSwapClose();
        handleSnackbarOpen();
      }, 3000);
    }
  }, [waitingOpen]);

  useEffect(() => {
    if (snackbarOpen) {
      setTimeout(() => {
        handleSnackbarClose();
      }, 3000);
    }
  }, [snackbarOpen]);

  const data = {
    balance: {
      wmtt: 0.1625435,
    },
  };

  return (
    <Card className="z-10 max-w-md p-6 space-y-4 border border-gray-200 shadow-lg dark:border-zinc-900 rounded-xl dark:bg-zinc-900">
      <CardHeader
        action={
          <IconButton aria-label="tune">
            <TuneIcon className="w-6 h-6 dark:text-white" />
          </IconButton>
        }
        title="Swap"
        classes={{ title: "font-bold text-xl" }}
        className="p-0 dark:text-white"
      />
      <CardContent className="flex flex-col items-center space-y-3 p-0">
        <SwapCurrencyInput
          label="From"
          placeholder="2,000"
          currency="ADA"
          equivValue={625.81}
          equivCurrency="$"
          balance={3400.625435}
        />
        <Button
          variant="outlined"
          className="text-black px-0 border border-gray-300 dark:border-zinc-400 hover:bg-gray-50 hover:bg-white/10 rounded-full min-w-[2.5rem] min-h-[2.5rem]"
          classes={{ startIcon: "m-0" }}
          startIcon={<SwapIcon className="w-5 h-5 text-white" />}
        />
        <SwapCurrencyInput
          label="To (estimated)"
          placeholder="622.63"
          currency="iUSD"
          equivValue={622.63}
          equivCurrency="$"
          balance={236.42}
        />
        {connectedWallet ? (
          <Button
            onClick={handleConfirmSwapOpen}
            variant="contained"
            className="w-full py-4 text-xl font-bold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded-xl"
          >
            Swap
          </Button>
        ) : (
          <Button
            onClick={handleConfirmSwapOpen}
            variant="contained"
            className="w-full py-4 text-xl font-bold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded-xl"
          >
            Connect Wallet
          </Button>
        )}

        {connectedWallet && (
          <Box className="w-full p-4 space-y-2 border-2 bg-zinc-50 dark:bg-zinc-800/50 border-zinc-100 dark:border-zinc-700/50 dark:text-white rounded-xl">
            <Typography className="text-sm font-bold dark:text-zinc-200">
              1 ADA = 0.31 iUSD
            </Typography>
            <Box className="flex justify-between">
              <Typography className="text-sm font-medium">
                Minimum received
              </Typography>
              <Typography className="text-sm font-medium">
                612.24 iUSD
              </Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography className="text-sm font-medium">
                Slippage Tolerance
              </Typography>
              <Typography className="text-sm font-medium">0.10%</Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography className="text-sm font-medium">
                Price Impact
              </Typography>
              <Typography className="text-sm font-medium">{`<0.001%`}</Typography>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box className="flex justify-between">
                <Typography className="text-sm font-medium">
                  Price Impact
                </Typography>
                <Typography className="text-sm font-medium">{`<0.001%`}</Typography>
              </Box>
            </Collapse>
            <Button
              aria-label="more"
              className="flex items-center w-full gap-1 py-0 text-xs capitalize text-zinc-900 dark:text-zinc-200 hover:bg-gray-200 dark:hover:bg-white/10"
              onClick={handleExpandClick}
            >
              <span>{expanded ? "Less" : "More"}</span>
              <ExpandMoreIcon
                className={`w-3 h-3 ${expanded ? "rotate-180" : ""} transition`}
              />
            </Button>
          </Box>
        )}
      </CardContent>
      <Modal
        headerTitle="Confirm swap"
        onClose={handleConfirmSwapClose}
        open={confirmSwapOpen}
      >
        <Stack className="gap-4">
          <Stack className="gap-1">
            <Box
              className={`flex justify-between w-full px-2 py-2 rounded-xl ${
                darkMode ? "bg-zinc-800/50" : "bg-zinc-50"
              }`}
            >
              <Box className="ml-1">
                <Typography
                  className={`text-2xl font-semibold py-2 px-1 ${
                    darkMode ? "text-white placeholder:text-zinc-600" : ""
                  }`}
                >
                  2,000
                </Typography>
              </Box>
              <Box className="flex flex-col items-end">
                <Box
                  className={`flex gap-2 p-3 border dark:border-zinc-700 rounded-xl ${
                    darkMode ? "bg-black border-zinc-700" : ""
                  }`}
                >
                  <img src={`images/wmtt.png`} alt={"WMTt"} className="h-6" />
                  <Typography
                    className={`font-semibold normal-case whitespace-nowrap ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    WMTt
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              className={`flex justify-between w-full px-2 py-2 rounded-xl ${
                darkMode ? "bg-zinc-800/50" : "bg-zinc-50"
              }`}
            >
              <Box className="ml-1">
                <Typography
                  className={`text-2xl font-semibold py-2 px-1 ${
                    darkMode ? "text-white placeholder:text-zinc-600" : ""
                  }`}
                >
                  22.309498
                </Typography>
              </Box>
              <Box className="flex flex-col items-end">
                <Box
                  className={`flex gap-2 p-3 border dark:border-zinc-700 rounded-xl ${
                    darkMode ? "bg-black border-zinc-700" : ""
                  }`}
                >
                  <img src={`images/meldt.png`} alt={"MELDt"} className="h-6" />
                  <Typography
                    className={`font-semibold normal-case whitespace-nowrap ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    MELDt
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
          <Box
            className={`w-full p-4 space-y-2 rounded-xl ${
              darkMode ? "bg-zinc-800/50 text-white" : ""
            }`}
          >
            <Box className="flex justify-between">
              <Typography className="text-sm font-medium">
                Slippage Tolerance:
              </Typography>
              <Typography className="text-sm font-medium">3%</Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography className="text-sm font-medium">Nitro:</Typography>
              <Typography className="text-sm font-medium">1.2</Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography className="text-sm font-medium">
                Estimated output:
              </Typography>
              <Typography className="text-sm font-medium">
                21.660323 - 25.992387 cNETA
              </Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography className="text-sm font-medium">
                Refundable deposit:
              </Typography>
              <Typography className="text-sm font-medium">2 ADA</Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography className="text-sm font-medium">
                Total Fees
              </Typography>
              <Typography className="text-sm font-medium">
                3 - 3.4 ADA
              </Typography>
            </Box>
          </Box>
          <Button
            onClick={handleWaitingOpen}
            variant="contained"
            className={`w-full py-4 text-xl font-bold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white rounded-xl ${
              darkMode ? "bg-sky-700 text-white" : ""
            }`}
          >
            Confirm Swap
          </Button>
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
        </Stack>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="I love snacks"
        key={"top right"}
        className="top-16 right-10"
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

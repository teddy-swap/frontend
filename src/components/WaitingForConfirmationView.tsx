import { Box, Button, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useDarkMode } from "../contexts";

const WaitingForConfirmationView = (props: IWaitingForConfirmationView) => {
  const { darkMode } = useDarkMode();
  return (
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
              <img src={`/images/wmtt.png`} alt={"WMTt"} className="h-6" />
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
              <img src={`/images/meldt.png`} alt={"MELDt"} className="h-6" />
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
          <Typography className="text-sm font-medium">Total Fees</Typography>
          <Typography className="text-sm font-medium">3 - 3.4 ADA</Typography>
        </Box>
      </Box>
      <Button
        onClick={props.onOpen}
        variant="contained"
        className={`w-full py-4 text-xl font-bold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white rounded-xl ${
          darkMode ? "bg-sky-700 text-white" : ""
        }`}
      >
        Confirm Swap
      </Button>
    </Stack>
  );
};

interface IWaitingForConfirmationView {
  onOpen: () => void;
}

export default WaitingForConfirmationView;

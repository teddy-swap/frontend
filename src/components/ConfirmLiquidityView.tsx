import { Box, Button, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useDarkMode } from "../contexts";
import TokenLabel from "./TokenLabel";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import InfoRow from "./InfoRow";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

const ConfirmLiquidityView = (props: IConfirmLiquidityView) => {
  const { darkMode } = useDarkMode();
  return (
    <Stack className="gap-4">
      <Box className="flex justify-evenly items-start">
        <Box className="flex flex-col items-center">
          <TokenLabel token={props.token1} />
          <Typography
            className={`text-2xl font-medium py-2 px-1 ${
              darkMode ? "text-white placeholder:text-zinc-600" : ""
            }`}
          >
            2,013
          </Typography>
        </Box>
        <AddOutlinedIcon className="w-6 h-6 m-3.5 text-white" />
        <Box className="flex flex-col items-center">
          <TokenLabel token={props.token2} />
          <Typography
            className={`text-2xl font-medium py-2 px-1 ${
              darkMode ? "text-white placeholder:text-zinc-600" : ""
            }`}
          >
            32,430
          </Typography>
        </Box>
      </Box>
      <Box className="infoBox">
        <InfoRow title="Share of Pool" content="~0.02%" />
        <InfoRow title="Total Fees" content="1.95 ADA" />
        <InfoRow
          title="1 iUSD = 23.9 TEDY"
          content="Reverse Rate"
          icon={() => <SwapHorizOutlinedIcon />}
        />
      </Box>
      <Button
        onClick={props.onOpen}
        variant="contained"
        className={`w-full py-4 text-xl font-semibold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white rounded-xl ${
          darkMode ? "bg-sky-700 text-white" : ""
        }`}
      >
        Confirm {props.type} Liquidity
      </Button>
    </Stack>
  );
};

interface IConfirmLiquidityView {
  onOpen: () => void;
  token1: string;
  token2: string;
  type: "add" | "remove";
}

export default ConfirmLiquidityView;

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
  Tabs,
  Tab,
} from "@mui/material";
import SwapIcon from "../assets/SwapIcon";
import Modal, { useModal } from "../components/Modal";
import { useDarkMode } from "../contexts";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import TickCircleIcon from "../assets/TickCircleIcon";
import BasicTabs from "../components/Tabs";
import SearchIcon from "@mui/icons-material/Search";
import LiquidityTable from "../components/LiquidityTable";
import TabPanel from "../components/Tabs";

export default function Liquidity() {
  const { darkMode } = useDarkMode();
  const tabStyle =
    "dark:text-white capitalize text-base font-semibold z-10 px-6";

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="dark:text-white w-[1100px] px-8 z-0 space-y-8">
      <Typography className="font-semibold text-xl">Liquidity</Typography>
      <Stack className="gap-6">
        <Box className="flex justify-between">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={`dark:bg-zinc-900 rounded-lg`}
            classes={{ indicator: "dark:bg-sky-700 h-full rounded-lg" }}
          >
            <Tab label="Pools Overview" className={`${tabStyle}`} />
            <Tab label="Your Liquidity" className={`${tabStyle}`} />
          </Tabs>
          <Button
            variant="contained"
            className="text-base px-6 font-semibold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded-lg"
          >
            Add Liquidity
          </Button>
        </Box>
        <Box
          className={`flex rounded-lg items-center dark:bg-zinc-900 max-w-2xl`}
        >
          <SearchIcon className={` ml-3 pr-1 w-6 h-6 dark:text-zinc-500`} />
          <TextField
            variant="outlined"
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            // value={props.value?.toLocaleString()}
            // defaultValue={props.defaultValue?.toLocaleString()}
            placeholder={"Type token name or pool id"}
            className="w-full px-1"
            InputProps={{
              classes: {
                notchedOutline: "border-none",
                input: `text-base font-medium py-2 px-1 w-full dark:text-white dark:placeholder:text-zinc-300`,
              },
            }}
          />
        </Box>
        <TabPanel value={value} index={0}>
          <LiquidityTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LiquidityTable />
        </TabPanel>
        {/* <BasicTabs /> */}
      </Stack>
    </Box>
  );
}

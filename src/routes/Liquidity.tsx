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
import { useNavigate } from "react-router-dom";
import PoolsOverviewTable from "../components/PoolsOverviewTable";
import SearchField from "../components/SearchField";

export default function Liquidity() {
  const { darkMode } = useDarkMode();
  const tabStyle =
    "dark:text-white capitalize text-base font-semibold z-10 px-6";

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <Box className="dark:text-white w-[1200px] px-8 z-0 space-y-8">
      <Typography className="font-semibold text-xl">Liquidity</Typography>
      <Stack className="gap-6">
        <Box className="flex justify-between">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={`dark:bg-zinc-900/50 rounded-lg`}
            classes={{ indicator: "dark:bg-sky-700 h-full rounded-lg" }}
          >
            <Tab label="Pools Overview" className={`${tabStyle}`} />
            <Tab label="Your Liquidity" className={`${tabStyle}`} />
          </Tabs>
          <Button
            onClick={() => navigate("add")}
            variant="contained"
            className="text-base px-6 font-semibold capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded-lg"
          >
            Add Liquidity
          </Button>
        </Box>
        <SearchField placeholder="Type token name or pool id" />
        <TabPanel value={value} index={0}>
          <LiquidityTable overview />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LiquidityTable />
        </TabPanel>
      </Stack>
    </Box>
  );
}

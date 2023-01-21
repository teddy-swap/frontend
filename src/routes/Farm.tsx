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
  Switch,
  InputLabel,
  FormControlLabel,
  Chip,
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
import UpdateIcon from "../assets/UpdateIcon";
import TotalDailyEmissions from "../components/TotalDailyEmissions";
import FarmTable from "../components/FarmTable";

export default function Farm() {
  const { darkMode } = useDarkMode();
  const tabStyle =
    "dark:text-white capitalize text-base font-semibold z-10 px-6";

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <Box className="dark:text-white w-[1200px] px-8 z-0 space-y-10">
      <Box className="space-y-2">
        <Box className="flex items-start justify-between">
          <Typography className="text-xl font-semibold">Farm</Typography>
          <TotalDailyEmissions value={15904363.87} token="TEDY" />
        </Box>
        <Box className="flex gap-8">
          <SearchField placeholder="Search by token name or id" />
          <FormControlLabel
            classes={{ label: `text-sm font-medium` }}
            control={
              <Switch
                className="p-[7px] h-[38px]"
                classes={{
                  track: `rounded-full`,
                  checked: `text-white [&+.MuiSwitch-track]:bg-sky-500`,
                }}
              />
            }
            label="Staked Only"
          />
        </Box>
      </Box>
      <FarmTable />
    </Box>
  );
}

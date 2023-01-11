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
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
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
import HistoryTable from "../components/HistoryTable";

export default function History() {
  const { darkMode } = useDarkMode();
  const tabStyle =
    "dark:text-white capitalize text-base font-semibold z-10 px-6";

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const [age, setAge] = useState("");

  const actions = ["all", "swap", "deposit"];
  const statuses = ["all", "complete", "pending", "cancelled"];

  const [action, setAction] = useState(actions[0]);
  const [status, setStatus] = useState(statuses[0]);

  const handleSelectActionChange = (event: SelectChangeEvent) => {
    setAction(event.target.value);
  };
  const handleSelectStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    <Box className="dark:text-white w-[1200px] z-0 dark:bg-zinc-900 rounded-2xl">
      <Box className="space-y-6 px-6 py-8">
        <Typography className="font-semibold text-xl">
          Transaction History
        </Typography>
        <Stack className="flex-row gap-6">
          <Stack className="gap-2 flex-grow">
            <InputLabel className="text-sm dark:text-white">
              Search by Token
            </InputLabel>
            <Box
              className={`flex rounded-lg items-center border dark:border-zinc-800 dark:bg-zinc-900 max-w-2xl`}
            >
              <SearchIcon className={` ml-3 pr-1 w-6 h-6 dark:text-zinc-500`} />
              <TextField
                variant="outlined"
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                // value={props.value?.toLocaleString()}
                // defaultValue={props.defaultValue?.toLocaleString()}
                placeholder={"Search by token name or policy ID"}
                className="w-full px-1"
                InputProps={{
                  classes: {
                    notchedOutline: "border-none",
                    input: `text-base font-medium py-2 px-1 w-full dark:text-white dark:placeholder:text-zinc-300`,
                  },
                }}
              />
            </Box>
          </Stack>
          <Stack className="gap-2 flex-grow">
            <InputLabel className="text-sm dark:text-white">
              Search by action
            </InputLabel>
            <Select
              value={action}
              onChange={handleSelectActionChange}
              variant="outlined"
              displayEmpty
              className="w-full dark:text-white border dark:border-zinc-800 rounded-lg capitalize"
              classes={{
                icon: "dark:text-white",
                select: "py-2 px-4",
              }}
              MenuProps={{
                PopoverClasses: {
                  paper: darkMode ? "bg-zinc-900" : "",
                },
              }}
            >
              {actions.map((action) => (
                <MenuItem
                  className="capitalize hover:bg-zinc-800 transition text-white"
                  key={action}
                  value={action}
                >
                  {action}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Stack className="gap-2 flex-grow">
            <InputLabel className="text-sm dark:text-white">
              Search by status
            </InputLabel>
            <Select
              value={status}
              onChange={handleSelectStatusChange}
              variant="outlined"
              displayEmpty
              className="w-full dark:text-white border dark:border-zinc-800 rounded-lg capitalize"
              classes={{
                icon: "dark:text-white",
                select: "py-2 px-4",
              }}
              MenuProps={{
                PopoverClasses: {
                  paper: darkMode ? "bg-zinc-900" : "",
                },
              }}
            >
              {statuses.map((status) => (
                <MenuItem
                  className="capitalize hover:bg-zinc-800 transition text-white"
                  key={status}
                  value={status}
                >
                  {status}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
      </Box>

      <HistoryTable />
    </Box>
  );
}

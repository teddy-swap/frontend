import { useState } from "react";
import {
  Alert,
  AlertTitle,
  Link,
  Stack,
  Button,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import ADAIcon from "../assets/ADAIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Modal, { useModal } from "./Modal";
import { useDarkMode } from "../contexts";
import SearchIcon from "@mui/icons-material/Search";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SwapListModal(props: ListModalProps) {
  const [open, handleOpen, handleClose] = useModal();
  const { darkMode } = useDarkMode();

  const tokens = [
    {
      name: "WMTt",
      key: "wmtt",
      value: 2.282439,
      equivValue: 203.394046,
      equivCurrency: "ADA",
      onClick: () => {
        setSelectedToken(0);
        handleClose();
      },
    },
    {
      name: "MELDt",
      key: "meldt",
      value: 2.282439,
      equivValue: 203.394046,
      equivCurrency: "ADA",
      onClick: () => {
        setSelectedToken(1);
        handleClose();
      },
    },
  ];
  const [selectedToken, setSelectedToken] = useState(-1);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        className="flex gap-2 py-3 text-gray-300 border border-gray-300 dark:text-white dark:bg-black dark:border-zinc-700 rounded-xl"
      >
        {selectedToken >= 0 && (
          <img
            src={`/images/${tokens[selectedToken].key}.png`}
            alt={tokens[selectedToken].name}
            className="h-6"
          />
        )}
        <Typography className="font-semibold text-black normal-case dark:text-white whitespace-nowrap">
          {selectedToken >= 0 ? tokens[selectedToken].name : "Select a token"}
        </Typography>
        <ExpandMoreIcon className="w-5 dark:text-white" />
      </Button>
      <Modal open={open} onClose={handleClose} headerTitle="Select a token">
        <Stack className="gap-1">
          <Box
            className={`flex border rounded-xl items-center ${
              darkMode ? "border-zinc-500" : ""
            }`}
          >
            <SearchIcon
              className={`border-r border-zinc-500 ml-2 pr-1 w-6 h-6 ${
                darkMode ? "text-zinc-500" : ""
              }`}
            />
            <TextField
              variant="outlined"
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              // value={props.value?.toLocaleString()}
              // defaultValue={props.defaultValue?.toLocaleString()}
              placeholder={"Search"}
              className="w-full px-1"
              InputProps={{
                classes: {
                  notchedOutline: "border-none",
                  input: `text-base font-medium py-2 px-1 w-full ${
                    darkMode ? "text-white placeholder:text-zinc-500" : ""
                  }`,
                },
              }}
            />
          </Box>
          <Stack className="gap-1 max-h-[480px] overflow-y-scroll">
            {tokens.map((token) => (
              <Button
                onClick={token.onClick}
                variant="outlined"
                key={token.name}
                className="capitalize text-white bg-transparent border-none flex w-full rounded-xl px-4 py-2 justify-start gap-2"
              >
                <img
                  src={`/images/${token.key}.png`}
                  alt={token.name}
                  className="h-8"
                />
                <Stack className="flex-row justify-between flex-grow">
                  <Stack className="items-start">
                    <Typography>{token.name}</Typography>
                    <Typography
                      className={`text-xs ${darkMode ? "text-zinc-400" : ""}`}
                    >
                      {token.name}
                    </Typography>
                  </Stack>
                  <Stack className="items-end">
                    <Typography>{token.value}</Typography>
                    <Typography
                      className={`text-xs ${darkMode ? "text-zinc-400" : ""}`}
                    >
                      ~{token.equivValue} {token.equivCurrency}
                    </Typography>
                  </Stack>
                </Stack>
              </Button>
            ))}
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}

interface ListModalProps {
  currency: string;
}

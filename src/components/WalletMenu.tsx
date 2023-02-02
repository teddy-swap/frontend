import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Menu,
  Typography,
  Box,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { useDarkMode } from "../contexts";
import CloseIcon from "@mui/icons-material/Close";
import CopyToClipboard from "./CopyToClipboard";
import { Tabs, Tab } from "@mui/material";

interface WalletMenuProps {
  wallets: {
    name: string;
    key: string;
    value: number;
    equivValue: number;
    equivCurrency: string;
    onClick: () => void;
  }[];
  handleSelect: (wallet: string) => void;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  connectedWallet: string;
}

const WalletMenu: React.FC<WalletMenuProps> = ({
  wallets,
  handleSelect,
  anchorEl,
  onClose,
  connectedWallet,
}) => {
  const { darkMode } = useDarkMode();

  const tabStyle =
    "min-w-[0px] text-white capitalize text-sm font-semibold z-10 px-3";

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Menu
      className="mt-5"
      classes={{
        paper: `rounded-xl ${darkMode ? "bg-zinc-900" : ""}`,
      }}
      id="wallet-menu"
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
    >
      <Box className="px-4 py-2 space-y-3">
        <Box className="flex min-w-[18rem] space-x-2 items-center">
          <img
            src={`/images/${connectedWallet}.png`}
            alt={connectedWallet}
            className="h-5"
          />
          <Typography
            className={`text-sm capitalize font-semibold flex-grow ${
              darkMode ? "text-white" : ""
            }`}
          >
            {connectedWallet} Wallet
          </Typography>
          <IconButton onClick={onClose} className="p-0">
            <CloseIcon className="text-white w-5 h-5" />
          </IconButton>
        </Box>
        <CopyToClipboard />
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            className={`dark:bg-zinc-900`}
            classes={{ indicator: "bg-sky-700 min-w-[0px] rounded-lg w-full" }}
          >
            <Tab label="Token" className={`${tabStyle}`} />
            <Tab label="NFTs" className={`${tabStyle}`} />
          </Tabs>
        </Box>
        <div className="">
          {wallets.map((wallet, index) => (
            <Button
              onClick={wallet.onClick}
              variant="outlined"
              key={wallet.name}
              className="capitalize text-white bg-transparent border-none flex w-full rounded-xl px-4 py-2 justify-start gap-2"
            >
              <img
                src={`/images/${wallet.key}.png`}
                alt={wallet.name}
                className="h-8"
              />
              <Stack className="flex-row justify-between flex-grow">
                <Stack className="items-start">
                  <Typography>{wallet.name}</Typography>
                  <Typography
                    className={`text-xs ${darkMode ? "text-zinc-400" : ""}`}
                  >
                    {wallet.name}
                  </Typography>
                </Stack>
                <Stack className="items-end">
                  <Typography>{wallet.value}</Typography>
                  <Typography
                    className={`text-xs ${darkMode ? "text-zinc-400" : ""}`}
                  >
                    ~{wallet.equivValue} {wallet.equivCurrency}
                  </Typography>
                </Stack>
              </Stack>
            </Button>
          ))}
        </div>
      </Box>
    </Menu>
  );
};

export default WalletMenu;

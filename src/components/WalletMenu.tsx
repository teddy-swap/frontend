import React from "react";
import {
  ListItem,
  ListItemText,
  Menu,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { useDarkMode } from "../contexts";
import CloseIcon from "@mui/icons-material/Close";
import CopyToClipboard from "./CopyToClipboard";

interface WalletMenuProps {
  wallets: string[];
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
        <div className="w-64">
          {wallets.map((wallet, index) => (
            <React.Fragment key={wallet}>
              <ListItem
                button
                onClick={() => handleSelect(wallet)}
                className="py-2"
              >
                <ListItemText primary={wallet} />
              </ListItem>
              {index < wallets.length - 1 && (
                <hr className="my-2 border-gray-300" />
              )}
            </React.Fragment>
          ))}
        </div>
      </Box>
    </Menu>
  );
};

export default WalletMenu;

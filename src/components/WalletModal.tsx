import { useEffect, useState, ReactNode } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneIcon from "../assets/TuneIcon";
import SwapCurrencyInput from "./SwapCurrencyInput";
import {
  Button,
  Box,
  TextField,
  Stack,
  CircularProgress,
  InputLabel,
  AvatarGroup,
  Avatar,
  Slider,
  Link,
} from "@mui/material";
import SwapIcon from "../assets/SwapIcon";
import Modal, { useModal } from "./Modal";
import { useDarkMode } from "../contexts";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import TickCircleIcon from "../assets/TickCircleIcon";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import InfoRow from "./InfoRow";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import ConfirmLiquidityView from "./ConfirmLiquidityView";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";
import TokensImageGroup from "./TokensImageGroup";
import { AiFillWarning } from "react-icons/ai";
import WaitingModal from "./WaitingModal";

const WalletModal = (props: Props) => {
  const { darkMode } = useDarkMode();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [
    confirmRemoveLiquidityOpen,
    handleConfirmRemoveLiquidityOpen,
    handleConfirmRemoveLiquidityClose,
  ] = useModal();
  const [waitingOpen, handleWaitingOpen, handleWaitingClose] = useModal();
  const [snackbarOpen, handleSnackbarOpen, handleSnackbarClose] = useModal();
  const [snackbarHover, setSnackbarHover] = useState(false);

  const navigate = useNavigate();

  const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

  const [amount, setAmount] = useState(0);

  const handleSliderChange = (e: Event) => {
    const { value } = e.target as HTMLInputElement;
    setAmount(parseInt(value));
  };

  const sliderButtons = [25, 50, 75, 100];

  const getStakedAmount = () =>
    ((props.stakedTokens * amount) / 100).toLocaleString();

  const wallets = [
    {
      name: "Nami",
      key: "nami",
      onClick: () => {
        setConnectedWallet("nami");
        handleWalletModalClose();
      },
    },
    {
      name: "Eternl",
      key: "eternl",
      onClick: () => {
        setConnectedWallet("eternl");
        handleWalletModalClose();
      },
    },
    {
      name: "GeroWallet Preview",
      key: "gerowallet",
      onClick: () => {
        setConnectedWallet("gerowallet");
        handleWalletModalClose();
      },
    },
  ];

  return (
    <Modal
      open={walletModalOpen}
      onClose={handleWalletModalClose}
      headerTitle="Connect wallet"
    >
      <Stack className="gap-3">
        <Alert
          className="bg-sky-900/20 border border-sky-900 text-white rounded-xl text-sm"
          icon={false}
        >
          By connecting a wallet, you agree to the{" "}
          <Link href="#">Cookie policy</Link> and acknowledge that you have read
          and understand the <Link href="#">Protocol disclaimer</Link>.
        </Alert>
        <Stack
          className={`rounded-xl border overflow-hidden ${
            darkMode ? "border-zinc-700" : ""
          }`}
        >
          {wallets.map((wallet) => (
            <Box
              className={`[&:not(:last-child)]:border-b ${
                darkMode ? "border-zinc-700" : ""
              }`}
            >
              <Button
                onClick={wallet.onClick}
                variant="outlined"
                key={wallet.name}
                className={`capitalize text-white bg-transparent rounded-none flex justify-between w-full p-4 ${
                  darkMode ? "hover:bg-cyan-900/80" : ""
                }`}
                classes={{
                  root: `border-none`,
                }}
              >
                <Typography>{wallet.name}</Typography>
                <img
                  src={`/images/${wallet.key}.png`}
                  alt={wallet.name}
                  className="h-8"
                />
              </Button>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Modal>
  );
};

interface Props {
  token1: string;
  token2: string;
  stakedTokens: number;
  open: boolean;
  onBack: () => void;
  waitingOpen: boolean;
  onWaitingOpen: () => void;
  onWaitingComplete: () => void;
}

export default WalletModal;

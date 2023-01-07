import { ReactNode, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
// import IconButton from "@mui/Joy/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/Logo";
import SettingsIcon from "../assets/SettingsIcon";
import UpdateIcon from "../assets/UpdateIcon";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AboutIcon from "../assets/AboutIcon";
import { useDarkMode } from "../contexts";
import HowtouseIcon from "../assets/HowtouseIcon";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GithubIcon from "../assets/GithubIcon";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  Alert,
  AlertTitle,
  Link,
  Modal as MuiModal,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IModal {
  open: boolean;
  onClose: () => void;
  headerTitle: string;
  children?: ReactNode;
}

const Modal = ({ open, onClose, children, headerTitle }: IModal) => {
  const { darkMode } = useDarkMode();
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] border p-5 rounded-xl ${
          darkMode ? "bg-zinc-900 border-zinc-800" : ""
        }`}
      >
        <Box
          className={`${
            darkMode ? "text-white" : ""
          } flex items-center justify-between mb-10`}
        >
          <Typography
            className="dark:text-black font-bold text-xl"
            variant="h6"
            component="h2"
          >
            {headerTitle}
          </Typography>
          <IconButton aria-label="close" onClick={onClose} className="p-0">
            <CloseIcon className={`${darkMode ? "text-white" : ""}`} />
          </IconButton>
        </Box>
        {children}
      </Box>
    </MuiModal>
  );
};

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return [open, handleOpen, handleClose] as const;
};

export default Modal;

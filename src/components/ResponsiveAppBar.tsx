import { useState } from "react";
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
import { Alert, AlertTitle, Link, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Modal, { useModal } from "./Modal";
import { NavLink, useNavigate } from "react-router-dom";

const pages = ["swap", "liquidity", "farm", "orders"];

function ResponsiveAppBar() {
  const { darkMode } = useDarkMode();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      name: "About",
      icon: InfoOutlinedIcon,
      onClose: () => {
        handleCloseUserMenu();
      },
      menu: [],
    },
    {
      name: "How to use",
      icon: HelpOutlineIcon,
      onClose: () => {
        handleCloseUserMenu();
      },
      menu: [],
    },
    {
      name: "Docs",
      icon: DescriptionOutlinedIcon,
      onClose: () => {
        handleCloseUserMenu();
      },
      menu: [],
    },
    {
      name: "Github",
      icon: GithubIcon,
      onClose: () => {
        handleCloseUserMenu();
      },
      menu: [],
    },
    {
      name: "Language",
      icon: LanguageOutlinedIcon,
      onClose: () => {
        handleCloseUserMenu();
      },
      menu: ["en"],
    },
  ];

  const [theme, setTheme] = useState("dark");

  const themes = ["light", "dark", "system"];

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTheme: string
  ) => {
    setTheme(newTheme);
  };

  const [connectedWallet, setConnectedWallet] = useState("");

  const [walletModalOpen, handleWalletModalOpen, handleWalletModalClose] =
    useModal();

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

  const navigate = useNavigate();

  return (
    <AppBar className="fixed px-10 py-0 text-black bg-white shadow-sm dark:bg-slate-900/70 dark:text-white">
      <Toolbar disableGutters>
        <Logo className="hidden mr-6 md:flex" />
        <Box className="flex flex-grow md:hidden">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Logo className="flex md:hidden" />
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            className="block bg-white dark:bg-zinc-900"
          >
            {pages.map((page, i) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                className={i === 0 ? "bg-sky-500/10" : ""}
              >
                <Typography
                  className={`text-center font-bold ${
                    i === 0
                      ? "text-sky-500 dark:text-white"
                      : "text-gray-500 dark:text-slate-900"
                  }`}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box className="flex-grow hidden gap-6 md:flex">
          {pages.map((page, i) => (
            <NavLink
              to={page}
              key={page}
              className={({ isActive }) =>
                `my-2 text-black block text-base font-bold capitalize hover:dark:text-white transition ${
                  isActive
                    ? "text-sky-500 dark:text-white"
                    : "text-gray-500 dark:text-zinc-400"
                }`
              }
            >
              {page}
            </NavLink>
          ))}
        </Box>

        <Box className="flex gap-2">
          {!connectedWallet ? (
            <Box className="text-black dark:text-white border border-gray-300 dark:border-slate-600 rounded-md min-h-[2.5rem] flex items-center p-0.5 gap-2">
              <Button
                onClick={handleWalletModalOpen}
                variant="contained"
                className="w-52 h-9 text-base font-medium capitalize shadow-none bg-emerald-100 dark:bg-sky-700 dark:text-white text-zinc-900 rounded"
              >
                Connect Wallet
              </Button>
              <Modal
                open={walletModalOpen}
                onClose={handleWalletModalClose}
                headerTitle="Select a wallet"
              >
                <Stack className="gap-3">
                  <Alert
                    className="bg-sky-900/20 border border-sky-900 text-white rounded-xl text-sm"
                    icon={false}
                  >
                    By connecting a wallet, you agree to the{" "}
                    <Link href="#">Cookie policy</Link> and acknowledge that you
                    have read and understand the{" "}
                    <Link href="#">Protocol disclaimer</Link>.
                  </Alert>
                  {wallets.map((wallet) => (
                    <Button
                      onClick={wallet.onClick}
                      variant="outlined"
                      key={wallet.name}
                      className="capitalize text-white bg-transparent border border-zinc-800 flex justify-between w-full rounded-xl p-4"
                    >
                      <Typography>{wallet.name}</Typography>
                      <img
                        src={`/images/${wallet.key}.png`}
                        alt={wallet.name}
                        className="h-8"
                      />
                    </Button>
                  ))}
                </Stack>
              </Modal>
            </Box>
          ) : (
            <Box className="text-black dark:text-white border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-white/10 rounded-md min-h-[2.5rem] flex items-center px-1 pl-2 gap-2">
              <Typography>3,400.6254 ₳</Typography>
              <Box className="flex items-center gap-1 p-1 rounded shadow-md dark:bg-black">
                <img
                  src={`/images/${connectedWallet}.png`}
                  alt={connectedWallet}
                  className="h-5"
                />
                <Typography>addr1...qk5lyz1h</Typography>
              </Box>
            </Box>
          )}
          <Tooltip title="Transaction History">
            <Button
              onClick={() => navigate("/history")}
              variant="outlined"
              className="text-black dark:text-white px-0 border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-white/10 rounded-md min-w-[2.5rem] min-h-[2.5rem]"
              classes={{ startIcon: "m-0" }}
              startIcon={<UpdateIcon className="w-5 h-5" />}
            />
          </Tooltip>
          <Tooltip title="Settings">
            <Button
              variant="outlined"
              onClick={handleOpenUserMenu}
              className="text-black dark:text-white px-0 border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-white/10 rounded-md min-w-[2.5rem] min-h-[2.5rem]"
              classes={{ startIcon: "m-0" }}
              startIcon={<SettingsIcon className="w-5 h-5" />}
            />
          </Tooltip>
          <Menu
            className="mt-5"
            classes={{ paper: darkMode ? "bg-zinc-900" : "" }}
            id="menu-appbar"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
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
            <Box className="px-4 py-2">
              <Typography
                className={`text-sm mb-2 ${darkMode ? "text-white" : ""}`}
              >
                Theme
              </Typography>
              <ToggleButtonGroup
                className="border border-zinc-800 w-full mb-3 rounded-xl p-1"
                value={theme}
                exclusive
                onChange={handleChange}
                aria-label="Theme"
              >
                {themes.map((item) => (
                  <ToggleButton
                    key={item}
                    value={item}
                    className={`p-1 text-sm w-20 capitalize ${
                      darkMode ? "text-white" : ""
                    } ${theme === item ? "bg-sky-700 rounded-lg" : ""}`}
                  >
                    {item}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
            {settings.map((item) => (
              <MenuItem
                key={item.name}
                onClick={item.onClose}
                disableRipple
                className={`gap-2 py-2 justify-between w-full transition ${
                  darkMode ? "text-white hover:bg-white/5" : ""
                }`}
              >
                <Box className="flex gap-2 items-center">
                  <item.icon className="w-4 h-4" />
                  <Typography className="text-sm">{item.name}</Typography>
                </Box>
                {item.menu.length > 0 && (
                  <ArrowForwardIosOutlinedIcon className="w-4 h-4" />
                )}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;

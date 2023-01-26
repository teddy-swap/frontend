import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Typography,
  Box,
  AvatarGroup,
  Avatar,
  Accordion,
  AccordionSummary,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Button from "@mui/material/Button";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDarkMode } from "../contexts";
import TokenAvatar from "./TokenAvatar";
import { MdAdd, MdOutlineArrowDownward } from "react-icons/md";
import { IconType } from "react-icons/lib";
import dayjs from "dayjs";

interface HistoryTableRow {
  row: any;
  action: "swap" | "remove";
}

export default function HistoryTableRow({ row, action }: HistoryTableRow) {
  const tableHeadCell = `dark:text-white border-zinc-800 py-2 text-sm px-6`;
  const tableCell = `dark:text-white border-zinc-800 text-base px-6 capitalize`;
  const tokenAvatar = `dark:bg-zinc-900 h-7 w-7 border-none`;

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { darkMode } = useDarkMode();

  const ActionIcon: { [key: string]: IconType } = {
    swap: MdOutlineArrowDownward,
    deposit: MdAdd,
    withdraw: MdOutlineArrowDownward,
  };

  return (
    <>
      <TableRow
        sx={{
          "&:not(:last-of-type) td, &:not(:last-of-type) th": {
            borderBottom: show ? 0 : 1,
          },
          // "&:last-child td, &:last-child th": { border: 0 },
        }}
        // sx={{ border: 1 }}
      >
        <TableCell
          className={`tableCell dark:border-zinc-800`}
          component="th"
          scope="row"
        >
          <Stack gap={1} className="items-center w-44">
            <Box className="flex justify-between border border-cyan-800 px-3 py-1.5 rounded-md w-full">
              <Box className="flex items-center space-x-2">
                <TokenAvatar token={row.token1} noTooltip className="h-5 w-5" />
                <Typography className="font-semibold text-sm">
                  {row.token1}
                </Typography>
              </Box>
              <Typography className="font-semibold text-sm">
                {row.valueT1.toLocaleString()}
              </Typography>
            </Box>
            <Box className="bg-cyan-800 rounded-md p-0.5 -my-3.5 z-10">
              {ActionIcon[row.action](row.action)}
            </Box>
            <Box className="flex justify-between border border-cyan-800 px-3 py-1.5 rounded-md w-full">
              <Box className="flex items-center space-x-2">
                <TokenAvatar token={row.token2} noTooltip className="h-5 w-5" />
                <Typography className="font-semibold text-sm">
                  {row.token2}
                </Typography>
              </Box>
              <Typography className="font-semibold text-sm">
                {row.valueT2.toLocaleString()}
              </Typography>
            </Box>
          </Stack>
        </TableCell>
        <TableCell className={`tableCell dark:border-zinc-800`}>
          {row.action}
        </TableCell>
        <TableCell className={`tableCell dark:border-zinc-800`}>
          <Typography>{dayjs(row.dateTime).format("MMMM D, YYYY")}</Typography>
          <Typography>{dayjs(row.dateTime).format("hh:mm A")}</Typography>
        </TableCell>
        <TableCell className={`tableCell dark:border-zinc-800`}>
          <Box className="flex justify-start">
            <Box className="flex gap-2 items-center border dark:border-zinc-700 px-3 py-1 rounded">
              <Box
                className={`h-1.5 w-1.5 rounded-full ${
                  row.status === "complete"
                    ? "bg-green-500"
                    : row.status === "pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              />
              <Typography className="text-sm">{row.status}</Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell className={`tableCell dark:border-zinc-800`}>
          <Box className="flex justify-end">
            <Button
              size="small"
              onClick={handleClick}
              variant="outlined"
              className="text-black p-0 w-0 h-0 border rounded dark:border-zinc-700 hover:bg-gray-50 hover:bg-white/10 min-w-[2rem] min-h-[2rem]"
              classes={{ startIcon: "m-0" }}
              startIcon={
                <MoreHorizIcon className={`w-4 h-4 text-white transition`} />
              }
            />
            <Menu
              id="basic-menu"
              className={`top-2`}
              classes={{
                paper: darkMode
                  ? "bg-zinc-900 border border-zinc-800 text-white"
                  : "",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                className="hover:bg-zinc-800 transition"
                onClick={handleClose}
              >
                View on Explorer
              </MenuItem>
              <MenuItem
                className="hover:bg-zinc-800 transition"
                onClick={handleClose}
              >
                Copy Transaction ID
              </MenuItem>
            </Menu>
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
}

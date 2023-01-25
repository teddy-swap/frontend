import { Alert, Box, Button, Snackbar, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CrossCircleIcon from "../assets/CrossCircleIcon";
import TickCircleIcon from "../assets/TickCircleIcon";

export default function TransactionSnackbar(props: Props) {
  const [snackbarHover, setSnackbarHover] = useState(false);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      props.open && !snackbarHover && props.onClose();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [props.open, snackbarHover]);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={props.open}
      onClose={props.onClose}
      message="I love snacks"
      key={"top right"}
      className="top-16 right-10"
      onMouseOver={() => setSnackbarHover(true)}
      onMouseLeave={() => setSnackbarHover(false)}
    >
      <Alert
        icon={false}
        severity="success"
        onClose={props.onClose}
        className="w-full dark:bg-zinc-900 dark:text-white rounded-lg shadow-lg"
      >
        <Box className="flex items-center gap-3 p-2">
          <Box>
            {props.success ? (
              <TickCircleIcon className="w-24 h-24 text-green-500" />
            ) : (
              <CrossCircleIcon className="w-24 h-24 text-red-500" />
            )}
          </Box>
          <Stack className="gap-2 flex-start">
            <Typography className="font-semibold">
              Transaction {props.success ? "Succeeded" : "Failed"}
            </Typography>
            {props.success ? (
              <Button
                className="text-xs px-0 w-36 border-zinc-700 text-sky-500"
                variant="outlined"
                onClick={props.onActionPress}
              >
                View on Explorer
              </Button>
            ) : (
              <Typography className="text-xs px-0 text-sky-500">
                Try again later
              </Typography>
            )}
          </Stack>
        </Box>
      </Alert>
    </Snackbar>
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
  success?: boolean;
  onActionPress?: () => void;
}

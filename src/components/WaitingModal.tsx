import Modal from "./Modal";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { useDarkMode } from "../contexts";
import { ModalProps } from "../types";
import { useEffect } from "react";

export default function WaitingModal(props: Props) {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    if (props.open) {
      setTimeout(() => {
        props.onClose();
      }, 3000);
    }
  }, [props.open]);
  return (
    <Modal
      headerTitle="Waiting for confirmation"
      onClose={props.onClose}
      open={props.open}
    >
      <Stack className="w-full py-6 items-center gap-3">
        <CircularProgress className="my-6" size={100} />
        <Typography className={`${darkMode ? "text-white" : ""}`}>
          {props.text}
        </Typography>
        <Typography className={`text-sm ${darkMode ? "text-white" : ""}`}>
          Confirm this transaction in your wallet
        </Typography>
      </Stack>
    </Modal>
  );
}

type Props = ModalProps & {
  text: string;
};

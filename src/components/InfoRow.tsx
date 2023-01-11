import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

const InfoRow = (props: IInfoRow) => (
  <Box className="flex justify-between items-center">
    <Typography className="text-sm font-medium dark:text-zinc-300">
      {props.title}
    </Typography>
    <Box className="flex items-center gap-1">
      {props.icon && <props.icon />}
      <Typography className="text-sm font-medium">{props.content}</Typography>
    </Box>
  </Box>
);

interface IInfoRow {
  title: string;
  content: string;
  icon?: () => ReactElement;
}

export default InfoRow;

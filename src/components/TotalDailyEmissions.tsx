import { Box, Stack, Chip, Typography } from "@mui/material";
import UpdateIcon from "../assets/UpdateIcon";

const TotalDailyEmissions = (props: Props) => (
  <Stack className="items-end">
    <Box className="relative flex items-center gap-2">
      <Box>
        <UpdateIcon className="w-6 h-6" />
        <Chip
          label="24 h"
          className="absolute text-[8px] dark:text-white dark:bg-black h-3.5 -left-4 top-1"
          classes={{ label: "px-1" }}
        />
      </Box>
      <Typography className="font-medium dark:text-zinc-300">
        Total Daily Emission
      </Typography>
    </Box>
    <Typography className="font-semibold">
      {props.value.toLocaleString()} {props.token}
    </Typography>
  </Stack>
);

interface Props {
  value: number;
  token: string;
}

export default TotalDailyEmissions;

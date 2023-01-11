import { Box, Button, Stack, Typography } from "@mui/material";
import { useDarkMode } from "../contexts";

const TokenLabel = (props: ITokenLabel) => {
  const { darkMode } = useDarkMode();
  return (
    <Box
      className={`flex gap-2 p-3 border dark:border-zinc-700 rounded-xl ${
        darkMode ? "bg-zinc-800 border-zinc-700" : ""
      }`}
    >
      <img
        src={`/images/${props.token.toLowerCase()}.png`}
        alt={props.token}
        className="h-6"
      />
      <Typography
        className={`font-medium normal-case whitespace-nowrap ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {props.token}
      </Typography>
    </Box>
  );
};

interface ITokenLabel {
  token: string;
}

export default TokenLabel;

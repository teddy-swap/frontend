import { AvatarGroup, Box, Typography } from "@mui/material";
import { HiBadgeCheck } from "react-icons/hi";
import TokenAvatar from "./TokenAvatar";
import TokenAvatarGroup from "./TokenAvatarGroup";

const TokenGroup = (props: Props) => (
  <Box className="flex items-center gap-4">
    <TokenAvatarGroup
      token1={props.token1}
      token2={props.token2}
      token1ID={props.token1ID}
      token2ID={props.token2ID}
    />
    <Box className="flex items-center gap-2">
      <Typography className="font-semibold">
        {props.token1}/{props.token2}
      </Typography>
      <HiBadgeCheck className="w-5 h-5" />
    </Box>
  </Box>
);

type Props = {
  token1: string;
  token2: string;
  token1ID: string;
  token2ID: string;
  tokenStyle?: string;
  className?: string;
};

export default TokenGroup;

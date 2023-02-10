import {
  AvatarGroup,
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiBadgeCheck } from "react-icons/hi";
import { FarmIconType, TokenGroupProps } from "../types";
import TokenAvatar from "./TokenAvatar";
import TokenAvatarGroup from "./TokenAvatarGroup";
import { MdInfo } from "react-icons/md";

const APR = (props: Props) => (
  <Box className="flex flex-col items-center">
    {props.extended && (
      <Box className="flex gap-1 items-center round">
        <Tooltip
          title={`${props.farm}: ${props.apr}%`}
          placement="top"
          arrow={true}
          classes={{
            tooltip: "bg-sky-800 top-1 p-3 rounded-xl text-xs",
            arrow: "text-sky-800",
          }}
        >
          <span className="text-xl">{props.farmIcon}</span>
        </Tooltip>
        <span className="text-xs">{props.farm}</span>
        <Tooltip
          title={
            <Stack className="gap-1 p-1">
              <Typography className="text-xs">
                {props.token1} APR: {props.aprT1}%
              </Typography>
              <Typography className="text-xs">
                {props.token2} APR: {props.aprT2}%
              </Typography>
              <Typography className="text-xs">
                Trading Fees APR (30D): {props.aprFees}%
              </Typography>
            </Stack>
          }
          placement="top"
          arrow={true}
          classes={{
            tooltip: "bg-sky-900 top-1 p-3 rounded-xl text-xs",
            arrow: "text-sky-800",
          }}
        >
          <span>
            <MdInfo className="" />
          </span>
        </Tooltip>
      </Box>
    )}
    <Box className="flex gap-2 items-center">
      <Typography className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
        {props.apr}%
      </Typography>
      <TokenAvatarGroup
        token1={props.token1}
        token2={props.token2}
        token1ID={props.token1ID}
        token2ID={props.token2ID}
        tokenStyle="h-5 w-5"
      />
    </Box>
  </Box>
);

type Props = {
  extended?: boolean;
  farm?: string;
  apr?: number;
  aprT1?: number;
  aprT2?: number;
  aprFees?: number;
  farmIcon?: FarmIconType;
  className?: string;
} & TokenGroupProps;

export default APR;

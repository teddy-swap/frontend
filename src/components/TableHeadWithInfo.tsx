import {
  AvatarGroup,
  Box,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiBadgeCheck } from "react-icons/hi";
import TokenAvatar from "./TokenAvatar";
import TokenAvatarGroup from "./TokenAvatarGroup";

const TableHeadWithInfo = (props: Props) => (
  <Box className="flex items-center justify-center gap-0">
    <span>{props.text}</span>
    <Tooltip
      title="Current APR for liquidity providers, including yield farming, trading fees, ADA staking rewards, and triple farm rewards (if applicable)"
      placement="top"
      arrow={true}
      classes={{
        tooltip: "bg-sky-800 top-3",
        arrow: "text-sky-800",
      }}
    >
      <IconButton>
        <AiOutlineQuestionCircle className="dark:text-white w-3.5 h-3.5" />
      </IconButton>
    </Tooltip>
  </Box>
);

type Props = {
  text: string;
  className?: string;
};

export default TableHeadWithInfo;

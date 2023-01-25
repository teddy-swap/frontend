import {
  Avatar as MuiAvatar,
  Box,
  Button,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

const TokenAvatar = (props: Props) => (
  <Tooltip
    title={
      <Box className="flex flex-col gap-2 items-center flex-shrink">
        <Stack className="">
          <Typography className="text-center font-medium break-all px-4 text-xs">
            Policy ID:
          </Typography>
          <Typography className="text-center font-medium break-all px-4 text-xs">
            {props.tokenId}
          </Typography>
        </Stack>
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
          variant="contained"
          className={`tooltip_button`}
        >
          Token Info
        </Button>
      </Box>
    }
    placement="top"
    arrow={true}
    classes={{
      tooltip: "bg-sky-900 top-1 rounded-xl p-3",
      arrow: "text-sky-900",
    }}
  >
    <MuiAvatar
      className={`tokenAvatar border-none ${props.className}`}
      alt={props.token}
      src={`images/${props.token.toLowerCase()}.png`}
    />
  </Tooltip>
);

type Props = {
  token: string;
  tokenId: string;
  className?: string;
};

export default TokenAvatar;

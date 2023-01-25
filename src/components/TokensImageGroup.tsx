import { AvatarGroup, Avatar } from "@mui/material";

const TokensImageGroup = (props: Props) => (
  <AvatarGroup>
    <Avatar
      className={`tokenAvatar border-none`}
      alt={props.token1}
      src={`/images/${props.token1.toLowerCase()}.png`}
    />
    <Avatar
      className={`tokenAvatar border-none z-10`}
      alt={props.token2}
      src={`/images/${props.token2.toLowerCase()}.png`}
    />
  </AvatarGroup>
);

interface Props {
  token1: string;
  token2: string;
}

export default TokensImageGroup;

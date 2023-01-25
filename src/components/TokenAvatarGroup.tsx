import { AvatarGroup } from "@mui/material";
import TokenAvatar from "./TokenAvatar";

const TokenAvatarGroup = (props: Props) => (
  <AvatarGroup>
    <TokenAvatar
      token={props.token1}
      tokenId={props.token1ID}
      className={props.tokenStyle}
    />
    <TokenAvatar
      token={props.token2}
      tokenId={props.token2ID}
      className={`z-10 ${props.tokenStyle}`}
    />
  </AvatarGroup>
);

type Props = {
  token1: string;
  token2: string;
  token1ID: string;
  token2ID: string;
  tokenStyle?: string;
  className?: string;
};

export default TokenAvatarGroup;

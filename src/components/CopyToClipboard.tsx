import React, { useState } from "react";
import { IconButton, Tooltip, Button, Typography } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { walletAddressState } from "../contexts/recoil";
import { useRecoilValue } from "recoil";

const CopyToClipboard: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const walletAddress = useRecoilValue(walletAddressState);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipOpen(false);
    }, 3000);
  };

  return (
    <div>
      <Tooltip
        open={tooltipOpen}
        title="Text Copied to Clipboard"
        placement="bottom"
      >
        <Button
          endIcon={<FileCopyIcon className="text-white h-4 w-4" />}
          variant="contained"
          className="bg-white/20 flex justify-between rounded-lg gap-2"
          onClick={handleCopy}
          fullWidth
        >
          <Typography className="text-xs lowercase font-medium">
            addr{walletAddress.slice(0, 11)}...{walletAddress.slice(-20)}
          </Typography>
        </Button>
      </Tooltip>
    </div>
  );
};

export default CopyToClipboard;

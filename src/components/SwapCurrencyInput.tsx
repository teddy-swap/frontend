import { Box } from "@mui/material";
import { InputLabel, FormHelperText, TextField } from "@mui/material";
import SwapListModal from "./SwapListModal";
import { ChangeEvent, useState } from "react";

export default function SwapCurrencyInput(props: Props) {
  const [value, setValue] = useState(props.value ?? 0);

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(
      target.value === "" ? 0 : parseFloat(target.value.replaceAll(",", ""))
    );
  };
  return (
    <Box className="w-full">
      <InputLabel className="mb-1 ml-2 text-sm dark:text-zinc-400">
        {props.label}
      </InputLabel>
      <Box className="flex justify-between w-full px-2 py-2 border border-gray-200 dark:border-zinc-700/50 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl">
        <Box className="ml-1">
          <TextField
            variant="outlined"
            // type="number"
            value={value?.toLocaleString()}
            onChange={handleChange}
            defaultValue={props.defaultValue?.toLocaleString()}
            placeholder={props.placeholder}
            className=""
            InputProps={{
              classes: {
                notchedOutline: "border-none",
                input:
                  "text-2xl font-semibold py-2 px-1 dark:text-white dark:placeholder:text-zinc-600",
              },
            }}
          />

          <FormHelperText
            id="outlined-weight-helper-text"
            className={`dark:text-zinc-400 transition ${!value && "opacity-0"}`}
          >
            ~ {props.equivCurrency}
            {props.equivValue.toLocaleString()}
          </FormHelperText>
        </Box>
        <Box className="flex flex-col items-end">
          <SwapListModal currency={props.currency} />
          <FormHelperText
            className="text-right whitespace-nowrap"
            id="outlined-weight-helper-text"
          >
            <span className="dark:text-zinc-400">Balance: </span>
            <span className="dark:text-white">{props.balance}</span>
          </FormHelperText>
        </Box>
      </Box>
    </Box>
  );
}

interface Props {
  label: string;
  placeholder: string;
  currency: string;
  equivValue: number;
  equivCurrency: string;
  balance: number;
  value?: number;
  defaultValue?: number;
}

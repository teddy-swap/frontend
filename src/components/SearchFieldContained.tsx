import SearchIcon from "@mui/icons-material/Search";
import { TextField, Box } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const SearchFieldContained = (props: Props) => (
  <Box
    className={`flex rounded-md items-center dark:bg-cyan-900/10 border dark:border-cyan-900/80`}
  >
    <BiSearch className={`ml-3 w-5 h-5 dark:text-zinc-500`} />
    <TextField
      variant="outlined"
      id="outlined-adornment-weight"
      aria-describedby="outlined-weight-helper-text"
      placeholder={props.placeholder}
      className="w-full px-1 py-0.5"
      InputProps={{
        classes: {
          notchedOutline: "border-none",
          input: `text-sm font-medium py-2 px-1 w-full dark:text-white dark:placeholder:text-zinc-300 placeholder:font-medium`,
        },
      }}
    />
  </Box>
);

interface Props {
  placeholder: string;
}

export default SearchFieldContained;

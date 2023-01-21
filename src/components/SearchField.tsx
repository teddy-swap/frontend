import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const SearchField: React.FC<ISearchField> = (props) => (
  <Box
    className={`flex rounded-lg items-center dark:bg-zinc-900/50 border dark:border-zinc-500 w-80`}
  >
    <BiSearch className={`ml-3 w-5 h-5 dark:text-zinc-500`} />
    <TextField
      variant="outlined"
      id="outlined-adornment-weight"
      aria-describedby="outlined-weight-helper-text"
      placeholder={props.placeholder}
      className="w-full px-1"
      InputProps={{
        classes: {
          notchedOutline: "border-none",
          input: `searchField_input`,
        },
      }}
    />
  </Box>
);

interface ISearchField {
  placeholder: string;
}

export default SearchField;

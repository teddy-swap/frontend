import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import DarkModeProvider from "./contexts";
import { RecoilRoot } from "recoil";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
  palette: {
    // mode: "dark",
  },
});

root.render(
  <RecoilRoot>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </RecoilRoot>
);

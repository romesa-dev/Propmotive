import { AppShell, MantineProvider, createStyles } from "@mantine/core";
import "./App.css";
import Home from "./pages/home";
import NavBar from "./components/Navbar/navbar";
export const AppShellCss = createStyles(() => ({
  appShell: {
    ["&  main"]: {
      minHeight: "unset",
      backgroundColor: "#F0F5F0"
    }
  }
}))
function App() {
  const {
    classes: {appShell},
  } = AppShellCss();
  return (
    
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: "30em",
          sm: "48em",
          md: "64em",
          lg: "74em",
          xl: "90em",
        },
      }}
    >
      <AppShell className={appShell} padding={0} header={<NavBar />}>
        <Home/>
      </AppShell>
    </MantineProvider>
  );
}

export default App;

window.cssToObject = cssToObject;

function cssToObject(str) {
  function convertCssStringToObject(cssString) {
    // Parse CSS string into key-value pairs
    const cssPairs = cssString.split(";").map((pair) => pair.trim());

    // Convert CSS pairs to valid JavaScript property names
    const jsPairs = cssPairs.map((pair) => {
      const [cssProperty, cssValue] = pair
        .split(":")
        .map((item) => item.trim());
      const jsProperty = cssProperty.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase()
      );

      // Convert value to number if it's a valid number
      const jsValue = /^\d+(\.\d+)?$/.test(cssValue)
        ? Number(cssValue)
        : cssValue;

      return [jsProperty, jsValue];
    });

    // Convert JavaScript pairs into an object
    const jsObject = Object.fromEntries(jsPairs);

    return jsObject;
  }
  const cssObj = str
    .split("{")[1]
    .split("}")[0]
    .split(";")
    .map((el) => {
      return convertCssStringToObject(el);
    })
    .reduce((acc, props) => {
      acc = { ...acc, ...props };
      return acc;
    });
  return JSON.stringify(cssObj);
}

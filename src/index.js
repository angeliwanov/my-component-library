import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components";
import { SignUpModal } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        Change Theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SignUpModal />
        {/* <PrimaryButton modifiers={["small"]}>Primary</PrimaryButton>
        <SecondaryButton modifiers={["large", "error", "secondaryButtonError"]}>
          Secondary
        </SecondaryButton>
        <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>
          Tertiary
        </TertiaryButton> */}
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

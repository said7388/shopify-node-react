import { NavigationMenu } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import theme from "./theme";

import { ThemeProvider } from "@mui/material";
import {
  AppBridgeProvider,
  PolarisProvider,
  QueryProvider,
} from "./components";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <PolarisProvider>
        <BrowserRouter>
          <AppBridgeProvider>
            <QueryProvider>
              <NavigationMenu
                navigationLinks={[
                  {
                    label: t("NavigationMenu.pageName"),
                    destination: "/pagename",
                  },
                ]}
              />
              <Routes pages={pages} />
            </QueryProvider>
          </AppBridgeProvider>
        </BrowserRouter>
      </PolarisProvider>
    </ThemeProvider>
  );
}

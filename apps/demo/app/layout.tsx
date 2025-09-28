"use client";
import "./styles.css";
import * as React from "react";
import { FluentProvider, webLightTheme, webDarkTheme } from "@fluentui/react-components";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Dynamic theme detection (light/dark mode)
  const [theme, setTheme] = useState(webLightTheme);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => setTheme(mq.matches ? webDarkTheme : webLightTheme);
    updateTheme();
    mq.addEventListener("change", updateTheme);
    return () => mq.removeEventListener("change", updateTheme);
  }, []);

  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DATA_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DATA_DOMAIN}
            src="https://plausible.io/js/plausible.js"
          ></script>
        )}
      </head>
      <body>
        <FluentProvider theme={theme}>
          <div>{children}</div>
        </FluentProvider>
      </body>
    </html>
  );
}

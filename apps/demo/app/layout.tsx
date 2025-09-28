"use client";
import "./styles.css";
import * as React from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <FluentProvider theme={webLightTheme}>
          <div>{children}</div>
        </FluentProvider>
      </body>
    </html>
  );
}

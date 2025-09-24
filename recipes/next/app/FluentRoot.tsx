'use client';

/*
  Fluent UI SSR pattern: the renderer generates style elements that must be inserted
  into the server-rendered HTML. useServerInsertedHTML + renderToStyleElements
  ensures those generated styles are included when using the Next App Router.
*/

import * as React from 'react';
import {
  FluentProvider,
  teamsLightTheme,
  SSRProvider,
  RendererProvider,
  createDOMRenderer,
  renderToStyleElements,
} from '@fluentui/react-components';
import { useServerInsertedHTML } from 'next/navigation';

export function FluentRoot({ children }: { children: React.ReactNode }) {
  // create a single renderer instance per client (per Next.js recommendation)
  const [renderer] = React.useState(() => createDOMRenderer());
  const didRenderRef = React.useRef(false);

  // Insert Fluent UI generated style elements into the server-rendered HTML.
  useServerInsertedHTML(() => {
    if (didRenderRef.current) {
      return null;
    }
    didRenderRef.current = true;
    return <>{renderToStyleElements(renderer)}</>;
  });

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={teamsLightTheme}>{children}</FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}

export default FluentRoot;
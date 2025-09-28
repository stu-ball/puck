import { Metadata } from "next";
import config from "../../config/server";

import { Components, RootProps } from "../../config/types";
import { getPage } from "../../lib/data-provider";
import { Config } from "@/core";
import { Render, resolveAllData } from "@/core/bundle/rsc";

// NB This is only necessary for this demo app, as the `@/core/bundle/rsc` path does not resolve to dist but the type for Config does
// This will be resolved once the RSC package is merged with the regular package after DropZone support is dropped
const conf = config as unknown as Config;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("/");
  return {
    title: page?.root?.props?.title ?? "Puck Demo",
  };
}

export default async function Page() {
  const data = await getPage("/") || {};
  const metadata = {
    example: "Hello, world",
  };

  const resolvedData = await resolveAllData<Components, RootProps>(
    data,
    conf,
    metadata
  );

  return <Render config={conf} data={resolvedData} metadata={metadata} />;
}

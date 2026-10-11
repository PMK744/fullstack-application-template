import type { ComponentType, ReactNode } from "react";

import { createRoot } from "react-dom/client";
import { Layout, Provider } from "@pmkerby/components";

export default function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <Provider>
      <Layout>{children}</Layout>
    </Provider>
  );
}

export function mount(View: ComponentType) {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("The React root element was not found.");
  }

  createRoot(root).render(
    <RootLayout>
      <View />
    </RootLayout>,
  );
}

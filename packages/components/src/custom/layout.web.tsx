import { Navbar } from "./navbar";

import type { LayoutProps } from "./layout.props";

export function Layout({ children, navbar }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar {...navbar} />
      {children}
    </div>
  );
}

import type { ReactNode } from "react";

import type { NavbarProps } from "./navbar.props";

export interface LayoutProps {
  children?: ReactNode;
  navbar?: NavbarProps;
}

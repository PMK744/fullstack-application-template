export interface NavbarProps {
  /**
   * The title of the navbar. This is displayed prominently at the top of the navbar.
   */
  title?: string;

  /**
   * The sections of the navbar. Each section has a title and a href. The sections are displayed as links in the navbar.
   */
  sections?: Array<{
    title: string;
    href: string;
  }>;
}

import type { NavbarProps } from "./navbar.props";

const defaultSections = [{ title: "Home", href: "/" }];

export function Navbar({
  title = "Template",
  sections = defaultSections,
}: NavbarProps) {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/95 px-6 py-4">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <a className="text-lg font-bold text-slate-50" href="/">
          {title}
        </a>
        <div className="flex items-center gap-5">
          {sections.map((section) => (
            <a
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              href={section.href}
              key={section.href}
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

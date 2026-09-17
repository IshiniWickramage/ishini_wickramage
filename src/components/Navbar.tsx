import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Activities", href: "#activities" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-5">
      <div className="mx-auto max-w-7xl">

        <div className="glass rounded-full px-5 py-3 flex items-center justify-between">

          <a
            href="#home"
            className="font-bold tracking-wider text-lg"
          >
            ISHINI
            <span className="text-sky-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:block rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-sky-400 transition-colors"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {open && (
          <div className="glass mt-2 rounded-3xl p-5 md:hidden">
            <div className="flex flex-col gap-5">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-300 hover:text-sky-400"
                >
                  {link.name}
                </a>
              ))}

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
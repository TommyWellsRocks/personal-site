import Link from "next/link";

export function HeaderNav() {
  const navItems = [
    // { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PROJECTS", link: "/projects" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-[1300px] px-4 backdrop-blur-md sm:px-10">
      <div className="flex items-center justify-between py-4 text-slate-500">
        <Link
          className="hover-fancy-text-shadow text-4xl font-bold hover:text-slate-300"
          href="/"
        >
          TW
        </Link>
        <nav className="hidden gap-x-4 text-lg font-bold min-[320px]:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="hover-fancy-text-shadow text-slate-300 transition duration-300 hover:text-slate-50"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

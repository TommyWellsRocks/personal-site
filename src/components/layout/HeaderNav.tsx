import Link from "next/link";

export function HeaderNav() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/#experience" },
    { name: "Projects", link: "/#projects" },
  ];
  return (
    <header className="fixed left-0 right-0 top-0 z-10 px-4 backdrop-blur-md sm:px-10 mx-auto max-w-[1300px]">
      <div className="flex items-center justify-between py-4 text-slate-500">
        <Link
          className="text-4xl font-bold transition duration-300 hover:text-slate-300"
          href="/"
        >
          TW
        </Link>
        <nav className="hidden gap-x-4 text-lg font-semibold min-[370px]:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="transition duration-300 hover:text-slate-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

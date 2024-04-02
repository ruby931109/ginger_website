"use client";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 1600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showWelcome ? null : (
        <nav className="w-full z-10 mb-5 px-5 py-3 fixed top-0 bg-white shadow">
          <Container>
            <Flex justify="between" align="center" gap="3">
              <Link href="/">
                <img src="/ginger.png" height={50} width={50} />
              </Link>
              <NavLinks />
            </Flex>
          </Container>
        </nav>
      )}
    </>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
  ];
  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;

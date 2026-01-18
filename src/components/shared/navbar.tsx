"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./locale-switcher";
import AuthLinks from "./auth-links";
import NavbarSheet from "./navbar-sheet";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
const Navbar = () => {
  const t = useTranslations("navLinks");
  const locale = useLocale();
  const pathName = usePathname();
  const NAV_LINKS = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("about"),
      href: "/about",
    },
    {
      name: t("brands"),
      href: "/brands",
    },
    {
      name: t("strategic"),
      href: "/strategic",
    },
    {
      name: t("franchise"),
      href: "/franchise",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white h-18 flex  items-center fixed top-0 left-0 right-0 z-50 "
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <p className="text-body-xl ">Sky Limits</p>
        </Link>
        <nav className="xl:flex hidden items-center gap-6">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <p
                    className={cn(
                      "text-lg text-primary-dark-hover block",
                      pathName === link.href &&
                        "text-black border-b-2 border-black",
                    )}
                  >
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="xl:flex items-center gap-4 hidden ">
          <LocaleSwitcher />
          <AuthLinks />
        </div>
        <div className="xl:hidden flex items-center gap-6">
          <LocaleSwitcher />
          <NavbarSheet links={NAV_LINKS} locale={locale} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

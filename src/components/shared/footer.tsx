import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  FaInstagram,
  FaRegEnvelope,
  FaSnapchatGhost,
  FaTelegramPlane,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import * as motion from "motion/react-client"
const Footer = () => {
  const t = useTranslations("footer");

  const socials = [
    {
      icon: FaWhatsapp,
      link: "#",
      label: "whatsapp",
    },
    {
      icon: FaXTwitter,
      link: "#",
      label: "twitter",
    },
    {
      icon: FaSnapchatGhost,
      link: "#",
      label: "snapchat",
    },
    {
      icon: FaInstagram,
      link: "#",
      label: "instagram",
    },
    {
      icon: FaTelegramPlane,
      link: "#",
      label: "telegram",
    },
    {
      icon: FaTiktok,
      link: "#",
      label: "tiktok",
    },
  ];
  return (
    <motion.footer
      initial={{ opacity: 0 ,y:20 }}
      whileInView={{ opacity: 1 ,y:0 }}
      transition={{ duration: 1 }}
      viewport={{once:true}}
      className=" bg-primary-dark-active">
      <div className="container py-16 text-white flex items-start justify-between max-lg:flex-wrap max-lg:gap-8">
        {/* logo and socials */}
        <div className="flex flex-col gap-4 lg:basis-80   max-lg:basis-full max-lg:items-center">
          <Image
            src="/sky-limits-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-32  bg-white rounded"
          />
          <p className="text-body-xl max-lg:text-center">{t("description")}</p>
          <div className="flex gap-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <s.icon className="text-secondary size-6 hover:scale-105 hover:text-primary-light transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
        {/* product */}
        <div className="flex flex-col gap-4   ">
          <h3 className="text-body-xl ">{t("sections.product.title")}</h3>
          <ul className="space-y-4">
            {t
              .raw("sections.product.links")
              .map((link: string, index: number) => (
                <li key={index}>
                  <Link
                    href="/"
                    className="text-body-md hover:text-secondary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        {/* company */}
        <div className="flex flex-col gap-4   ">
          <h3 className="text-body-xl ">{t("sections.company.title")}</h3>
          <ul className="space-y-4">
            {t
              .raw("sections.company.links")
              .map((link: string, index: number) => (
                <li key={index}>
                  <Link
                    href="/"
                    className="text-body-md hover:text-secondary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        {/* support */}
        <div className="flex flex-col gap-4   ">
          <h3 className="text-body-xl ">{t("sections.support.title")}</h3>
          <ul className="space-y-4">
            {t
              .raw("sections.support.links")
              .map((link: string, index: number) => (
                <li key={index}>
                  <Link
                    href="/"
                    className="text-body-md hover:text-secondary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        {/* contact */}
        <div className="flex flex-col gap-4   ">
          <h3 className="text-body-xl ">{t("sections.contact.title")}</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-body-md hover:text-secondary transition-colors flex items-center gap-2"
              >
                <FaRegEnvelope className="shrink-0" />
                {t("sections.contact.email")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-body-md hover:text-secondary transition-colors flex items-center gap-2"
              >
                <FiPhone className="shrink-0" />

                {t("sections.contact.phone")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-body-md hover:text-secondary transition-colors flex items-center gap-2"
              >
                <IoLocationOutline className="shrink-0" />

                {t("sections.contact.address")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container  py-6 border-t text-white">
          <div className="flex gap-2 items-center justify-center max-md:flex-col">
          <p className="text-body-sm">{t("copyright")}</p>
          <p className="max-md:hidden">|</p>
            <Link
              href="/terms"
              className="text-body-sm text-secondary hover:text-primary-light transition-colors"
            >
              {t("legal.terms")}
          </Link>
          <p className="max-md:hidden">|</p>
            <Link
              href="/terms"
              className="text-body-sm text-secondary hover:text-primary-light transition-colors"
            >
              {t("legal.privacy")}
            </Link>
          </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  FaPlus,
  FaSnapchatGhost,
  FaTimes,
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);

  const socials = [
    {
      icon: FaWhatsapp,
      link: "#",
      label: "whatsapp",
      color: "text-green-500",
    },
    {
      icon: FaXTwitter,
      link: "#",
      label: "twitter",
      color: "text-black",
    },
    {
      icon: FaSnapchatGhost,
      link: "#",
      label: "snapchat",
      color: "text-yellow-500",
    },
    {
      icon: FaInstagram,
      link: "#",
      label: "instagram",
      color: "text-pink-500",
    },
    {
      icon: FaTelegramPlane,
      link: "#",
      label: "telegram",
      color: "text-blue-500",
    },
    {
      icon: FaTiktok,
      link: "#",
      label: "tiktok",
      color: "text-black",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="relative flex flex-col items-center gap-3">
        <AnimatePresence>
          {open && (
            <>
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white shadow-lg  rounded-full size-14  flex items-center justify-center hover:scale-110 transition-transform"
                  title={s.label}
                >
                  <s.icon size={20} className={s?.color} />
                </motion.a>
              ))}
            </>
          )}
        </AnimatePresence>

        <Button
          onClick={() => setOpen(!open)}
          className="bg-primary text-white  size-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          {open ? <FaTimes /> : <FaPlus />}
        </Button>
      </div>
    </motion.div>
  );
}

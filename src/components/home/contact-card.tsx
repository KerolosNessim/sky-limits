"use client";

import { Copy, Link2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

type Row = {
  icon: React.ReactNode;
  title: string;
  value: string;
  copyValue?: string;
  href?: string; // لو عايزة value يبقى لينك
  rightIcon?: React.ReactNode; // زي Link icon
};

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 900);
    } catch {
      // لو المتصفح مانع clipboard
      setCopied(false);
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="h-8 w-8 rounded-lg"
            aria-label="Copy"
          >
            <Copy className="h-4 w-4 text-primary" />
          </Button>
        </TooltipTrigger>
        <TooltipContent >{copied ? "Copied" : "Copy"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ContactRow({ row }: { row: Row }) {
  return (
    <div className="flex items-start gap-2">
      <div className="text-primary">{row.icon}</div>

      <div className="flex-1">
        <div className="text-body-lg">{row.title}</div>
        <div className="flex items-center ">
          {row.href ? (
            <Link
              href={row.href}
              className="text-body-xl  text-primary"
            >
              {row.value}
            </Link>
          ) : (
            <span className="text-body-xl text-primary">
              {row.value}
            </span>
          )}

          {row.copyValue ? <CopyBtn text={row.copyValue} /> : null}
          {row.rightIcon ? (
            <span className="text-primary">{row.rightIcon}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function ContactCard() {
  const rows: Row[] = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "9200343222",
      copyValue: "9200343222",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "SMS",
      value: "199099",
      copyValue: "199099",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "help@company.sa",
      copyValue: "help@company.sa",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Riyadh",
      href: "https://www.google.com/maps/search/?api=1&query=Riyadh",
      rightIcon: <Link2 className="h-4 w-4" />,
    },
  ];

  return (
    <Card className="w-full rounded-2xl border bg-white shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-body-xl ">Contact us</h3>

        <div className="mt-4 space-y-4">
          {rows.map((row) => (
            <ContactRow key={row.title} row={row} />
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-body-xl">Follow us</h4>

          <div className=" flex items-center gap-6 text-muted-foreground">
            {/* X */}
            <Link
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="X"
            >
              <FaTwitter className="h-5 w-5"/>
            </Link>

            {/* LinkedIn */}
            <Link
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5"/>
            </Link>

            {/* Instagram */}
            <Link
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5"/>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

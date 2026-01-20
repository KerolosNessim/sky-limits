import React from "react";
import SectionHeader from "../shared/section-header";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as motion from "motion/react-client";
const Faqs = () => {
  const t = useTranslations("faqs");
  return (
    <section className="py-16">
      <div className="container space-y-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <SectionHeader title={t("title")} description={t("description")} />
        </motion.div>
        {/* faqs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="lg:w-1/2 mx-auto space-y-4"
            defaultValue="item-2"
          >
            {t
              .raw("faqs")
              .map(
                (faq: { question: string; answer: string }, index: number) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index+1}`}
                    className="data-[state=open]:bg-linear-to-b from-primary to-secondary px-4 data-[state=open]:text-white data-[state=open]:rounded-xl"
                  >
                    <AccordionTrigger withPlus>
                      <div className="flex items-center lg:gap-12 gap-2 lg:text-lg">
                        <p>{index < 10 ? `0${index + 1}` : index + 1}</p>
                        <p>{faq.question}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ),
              )}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;

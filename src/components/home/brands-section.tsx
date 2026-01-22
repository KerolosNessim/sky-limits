import React from "react";
import SectionHeader from "../shared/section-header";
import { useTranslations } from "next-intl";
import CustomLink from "../shared/custom-link";
import BrandCard from "./brand-card";
import * as motion from "motion/react-client";
type Props = {
  withSeeAll?: boolean;
  numberOfBrands?: number;
};
const BrandsSection = ({ withSeeAll = true , numberOfBrands = 6 }: Props) => {
  const t = useTranslations("brandsSection");
  return (
    <section className="py-16">
      <div className="container space-y-8">
        {/* title and see all */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-end justify-between max-lg:flex-col "
        >
          <SectionHeader
            className={`${withSeeAll ? "lg:max-w-[60%]" : ""}`}
            title={t("title")}
            description={t("description")}
          />
          {withSeeAll && <CustomLink href="/" text={t("seeAll")} />}
        </motion.div>
        {/* brands */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4">
          {Array.from({ length: numberOfBrands }).map((_, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              key={index}
            >
              <BrandCard />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

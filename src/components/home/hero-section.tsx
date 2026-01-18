import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import Image from "next/image";
import CustomBadage from "../shared/custom-badage";
import { Button } from "../ui/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative h-screen w-full overflow-hidden pt-18 flex items-center justify-center">
      {/* anmated bg */}
      <InteractiveGridPattern />
      {/* content */}
      <div className="container flex items-center justify-between ">
        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full flex flex-col gap-4 z-1 max-lg:items-center max-lg:text-center "
        >
          <CustomBadage text={t("badge")} />
          <h1 className="lg:text-h1 text-h2 ">{t("title")}</h1>
          <p className="lg:text-2xl text-lg">{t("description")}</p>
          <div className="flex items-center gap-4">
            <Button className=" text-base cursor-pointer">
              {t("viewPortfolio")}
            </Button>
            <Button className=" text-base cursor-pointer bg-transparent text-primary border-b-2 border-primary rounded-none hover:text-white hover:bg-primary">
              {t("ourMission")}{" "}
              <HiArrowNarrowRight className="rtl:rotate-180" />
            </Button>
          </div>
        </motion.div>
        {/* image */}
        <motion.div
          className="w-[45%] max-lg:hidden z-1"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/hero.png"
            alt="hero"
            width={500}
            height={500}
            className="w-full object-contain  "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

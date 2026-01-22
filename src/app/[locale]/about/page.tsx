import MissionCard from "@/components/about/mission-card";
import MissonSection from "@/components/about/misson-section";
import GoalSlider from "@/components/home/goal-slider";
import TeamSection from "@/components/home/team-section";
import CustomBadage from "@/components/shared/custom-badage";
import CustomLink from "@/components/shared/custom-link";
import CustomProgress from "@/components/shared/custom-progress";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const AboutPage = () => {
  const t = useTranslations("about");

  return (
    <main>
      {/* main content */}
      <section className="relative lg:h-screen w-full overflow-hidden lg:pt-18 pt-24 flex items-center justify-center">
        {/* anmated bg */}
        <InteractiveGridPattern />
        {/* content */}
        <div className="container flex items-center justify-between max-lg:flex-col gap-4 ">
          {/* content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full flex flex-col gap-4 z-1 max-lg:items-center max-lg:text-center "
          >
            <CustomBadage text={t("badge")} />
            <h1 className="lg:text-h2 text-h3 text-gradient">{t("title")}</h1>
            <p className="lg:text-2xl text-lg">{t("description")}</p>
            <CustomLink href="/" text={t("learnMore")} />
          </motion.div>
          {/* slider */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <GoalSlider />
          </motion.div>
        </div>
      </section>
      {/* goals */}
      <section className="bg-primary/20 py-16">
        <MissonSection />
      </section>
      {/* team */}
      <TeamSection />
      {/* statisics */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" py-16"
      >
        <div className="container lg:flex justify-between ">
          <div className="w-[38%] max-lg:hidden">
            <Image
              src={"/statistics.png"}
              alt="statistics"
              width={200}
              height={200}
              className="w-full"
            />
          </div>
          <div className="lg:w-[60%] flex flex-col  gap-10">
            <p className="text-h5 text-natural-darker">
              {t("statistics.description")}
            </p>
            <div className="flex flex-col gap-8">
              <CustomProgress number={85} title={t("statistics.marketing")} />
              <CustomProgress number={70} title={t("statistics.innovation")} />
              <CustomProgress number={90} title={t("statistics.business")} />
            </div>
            <Button className="w-fit h-14 rounded-full text-body-md px-8! text-white">
              {t("statistics.link")}
              <FaArrowRightLong />
            </Button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;

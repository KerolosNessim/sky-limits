import BrandsSection from "@/components/home/brands-section";
import GoalSlider from "@/components/home/goal-slider";
import ProjectSection from "@/components/home/project-section";
import CustomBadage from "@/components/shared/custom-badage";
import CustomLink from "@/components/shared/custom-link";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
const AboutPage = () => {
  const t = useTranslations("about");
  const b = useTranslations("brands");

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
            <CustomBadage text={b("badge")} />
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
      {/* brands section */}
      <BrandsSection withSeeAll={false} numberOfBrands={9} />
      {/* project section */}
      <ProjectSection />
    </main>
  );
};

export default AboutPage;

import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import CustomLink from "../shared/custom-link";
import SectionHeader from "../shared/section-header";
import GoalSlider from "./goal-slider";

const GoalSection = () => {
  const t = useTranslations("goalSection");
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-primary/20 py-16"
    >
      <div className="container flex items-center gap-12 max-lg:flex-col overflow-hidden">
        {/* content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 lg:w-1/2"
        >
          <SectionHeader title={t("title")} description={t("description")} />
          <p className="lg:text-body-xl text-body-lg max-lg:text-center">
            {t("description2")}
          </p>
          <CustomLink href="/" text={t("learnMore")} />
        </motion.div>
        {/* slider */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <GoalSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GoalSection;

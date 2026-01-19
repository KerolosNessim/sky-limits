import SectionHeader from "../shared/section-header";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import ProjectSlider from "./project-slider";

const ProjectSection = () => {
  const t = useTranslations("projectSection");
  return (
    <section className="py-16 bg-primary/20">
      <div className="container space-y-8">
        {/* title and see all */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            className="lg:max-w-[60%]"
            title={t("title")}
            description={t("description")}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ProjectSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;

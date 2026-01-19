import SectionHeader from "../shared/section-header";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import TeamSlider from "./team-slider";
const TeamSection = () => {
  const t = useTranslations("team");
  return (
    <section className="py-16 ">
      <div className="container space-y-8">
        {/* title and see all */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <SectionHeader title={t("title")} description={t("description")} />
        </motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <TeamSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;


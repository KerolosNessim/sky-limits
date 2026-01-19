import SectionHeader from "../shared/section-header";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import StrategicCard from "./strategic-card";
const StrategicSection = () => {
  const t = useTranslations("strategic");
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
          <SectionHeader title={t("title")} description={t("description")} />
        </motion.div>
        {/* card */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {Array.from({ length: 3}).map((_, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              key={index}
            >
              <StrategicCard />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicSection;

import { useTranslations } from "next-intl";
import SectionHeader from "../shared/section-header";
import MissionCard from "./mission-card";
import * as motion from "motion/react-client";
import CustomLink from "../shared/custom-link";

type props = {
  withLink?: boolean;
};
const MissonSection = ({ withLink = true }: props) => {
  const t = useTranslations("about");

  return (
    <div className="container flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 z-1 max-lg:items-center max-lg:text-center "
      >
        <SectionHeader
          title={t("goals.title")}
          description={t("goals.description")}
        />
        <p className="text-body-md">{t("goals.description2")}</p>
      </motion.div>
      {/* goals cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <MissionCard key={index} index={index} />
        ))}
      </div>

      {withLink && <CustomLink href="/" text={t("goals.learnMore")} />}
    </div>
  );
};

export default MissonSection;

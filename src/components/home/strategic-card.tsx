import { LucideChartSpline } from "lucide-react";
import { useTranslations } from "next-intl";
const StrategicCard = () => {
  const t = useTranslations("strategic.card");
  return (
    <div className="w-full p-6 bg-grad-primary-secondary rounded-xl ">
      {/* icon */}
      <div className="size-16 bg-white rounded-lg flex items-center justify-center mb-12">
        <LucideChartSpline className="size-10 text-text" />
      </div>
      {/* name */}
      <h3 className="text-h4 text-white mb-6">{t("title")}</h3>
      {/* description */}
      <p className="text-white text-body-xl">{t("description")} </p>
    </div>
  );
};

export default StrategicCard;

import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";

const FranchiseCard = () => {
  const t = useTranslations("franchisePage");
  
  return (
    <div className="bg-white rounded-xl lg:p-8 p-6 space-y-4 border-2">
      <IoSettingsOutline className="text-h4"/>
      <p className="text-h5 ">{t("whyFranchiseCard")}</p>
    </div>
  );
};

export default FranchiseCard;

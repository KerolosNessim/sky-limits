import { Link } from '@/i18n/navigation';
import { MdArrowOutward } from 'react-icons/md';
import { Badge } from '../ui/badge';
import { useTranslations } from 'next-intl';
const BrandCard = () => {
  const t = useTranslations("brandsSection.card");
  return (
    <div className="w-full p-6 bg-grad-primary-secondary rounded-xl space-y-4">
      {/* placeholder */}
      <div className="size-24 bg-slate-300 rounded-full"></div>
      {/* badage */}
      <Badge className="text-body-md bg-secondary text-white">
        {t("badge")}
      </Badge>
      {/* name */}
      <h3 className="text-h4 text-white">{t("title")}</h3>
      {/* description */}
      <p className=" text-primary-light-active">
        {t("description")}{" "}
      </p>
      {/* link */}
      <Link
        href={"/brands/1"}
        className=" text-base h-10 w-fit px-2 flex items-center  gap-1 text-white hover:text-text hover:bg-white  transition-all duration-300 ease-in-out"
      >
        {t("link")}    <MdArrowOutward className="rtl:rotate-y-180" />
      </Link>
    </div>
  );
}

export default BrandCard
import React from 'react'
import { Badge } from '../ui/badge';
import { useTranslations } from 'next-intl';
type Props = {
    number: number;
}
const ProjectCard = ({ number }: Props) => {
  const t = useTranslations("projectSection.card");
  return (
    <div className="bg-white rounded-xl p-6 space-y-4">
      <h3 className="text-h4 text-natural-darker">{number<10 ? `0${number}` : number}</h3>
      <Badge className="text-body-md bg-secondary text-white">{t("badge")}</Badge>
      <div>
        <h2 className="text-h4">{t("title")}</h2>
        <p className="text-body-xl ">{t("description")}</p>
      </div>
    </div>
  );
}

export default ProjectCard
import { useTranslations } from 'next-intl';
import SectionHeader from '../shared/section-header';
import CustomLink from '../shared/custom-link';
import * as motion from "motion/react-client"
const FranchiseSection = () => {
  const t = useTranslations("franchise");
  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1}}
    viewport={{  once: true }}
      className='py-16 ' >
      <div className='container flex items-center justify-between    max-lg:flex-col max-lg:gap-8'>
        <div className='lg:max-w-80'>
          <SectionHeader title={t("title")} description={t("description")} />
        </div>

        <div className='lg:max-w-[60%] space-y-4 '>
          <p className='lg:text-body-xl text-body-md max-lg:text-center'>{t("description2")}</p>
          <CustomLink href="/" text={t("cta")} />
        </div>
        
      </div>
    </motion.section>
  )
}

export default FranchiseSection
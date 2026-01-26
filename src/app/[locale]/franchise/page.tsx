import ContactBox from "@/components/home/contact-box";
import { ContactCard } from "@/components/home/contact-card";
import FranchiseCard from "@/components/home/franchise-card";
import { BecomeFranchiseForm } from "@/components/home/franchise-form";
import CustomBadage from "@/components/shared/custom-badage";
import CustomLink from "@/components/shared/custom-link";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
const FranchisePage = () => {
  const t = useTranslations("franchisePage");
  const requirements = t.raw("requirements.list");
  return (
    <>
    <Navbar/>
    <main>
      {/* content */}
      <section className="relative h-screen w-full overflow-hidden  flex items-center justify-center">
        {/* anmated bg */}
        <InteractiveGridPattern />
        {/* content */}
        <div className="container flex items-center justify-between ">
          {/* content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="  flex flex-col gap-4 z-1 items-center text-center "
          >
            <CustomBadage text={t("badge")} />
            <h1 className="lg:text-h2 text-h3 text-gradient">{t("title")}</h1>
            <p className="lg:text-body-xl text-body-md">{t("description")}</p>
            <div className="flex items-center gap-4">
              <CustomLink href="/" text={t("link")} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* why us */}
      <section className="py-16 container space-y-8">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:text-h3 text-h4 text-center"
        >
          {t("whyFranchise")}
        </motion.h3>
        {/* grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 + 0.2 * index }}
                viewport={{ once: true }}
                key={index}
              >
                <FranchiseCard />
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* requirments */}
      <section className="py-16 bg-primary/20">
        <div className="container">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 w-full"
          >
            <span className="h-1 flex-1 bg-white "></span>
            <span className="px-4 py-2 text-h3 ">
              {t("requirements.title")}
            </span>
            <span className="h-1 flex-1 bg-white "></span>
          </motion.div>
          {/* discriptions */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center lg:text-h4 text-h5"
          >
            {t("requirements.description")}
          </motion.p>
          {/* list */}
          <div className=" mt-8 border-2 border-white  rounded-xl">
            <ul className="p-6 list-disc list-inside grid lg:grid-cols-2 grid-cols-1 gap-4">
              {requirements.map((item: string, index: number) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 + 0.2 * index }}
                    viewport={{ once: true }}
                    key={index}
                    className="text-body-xl "
                  >
                    {item}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      {/* form */}
      <section className="py-16 container grid lg:grid-cols-3 grid-cols-1 gap-8 items-center">
        <div className="lg:col-span-2">
          <BecomeFranchiseForm />
        </div>
        <div className="lg:col-span-1">
          <ContactCard />
        </div>
      </section>
    </main>
    <ContactBox/>
    <Footer/>
    </>
  );
};

export default FranchisePage;

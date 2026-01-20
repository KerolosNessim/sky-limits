import GoalSection from "@/components/home/goal-section";
import HeroSection from "@/components/home/hero-section";
import BrandsSection from "@/components/home/brands-section";
import ProjectSection from "@/components/home/project-section";
import FranchiseSection from "@/components/home/franchise-section";
import StrategicSection from "@/components/home/strategic-section";
import TeamSection from "@/components/home/team-section";
import Faqs from "@/components/home/faqs";
import ContactBox from "@/components/home/contact-box";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <GoalSection />
      <BrandsSection />
      <ProjectSection />
      <FranchiseSection />
      <StrategicSection />
      <TeamSection />
      <Faqs/>
      <ContactBox/>
    </div>
  );
}

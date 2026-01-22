import BrandsSection from "@/components/home/brands-section";
import Faqs from "@/components/home/faqs";
import FranchiseSection from "@/components/home/franchise-section";
import GoalSection from "@/components/home/goal-section";
import HeroSection from "@/components/home/hero-section";
import ProjectSection from "@/components/home/project-section";
import StrategicSection from "@/components/home/strategic-section";
import TeamSection from "@/components/home/team-section";
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
    </div>
  );
}

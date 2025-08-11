import Blog from "@/components/layouts/LPLayout/Blog";
import CourseForYou from "@/components/layouts/LPLayout/CourseForYou";
import CourseIncludesSection from "@/components/layouts/LPLayout/CourseIncludes";
import Facilitate from "@/components/layouts/LPLayout/Facilitate";
import Hero from "@/components/layouts/LPLayout/Hero";
import Learn from "@/components/layouts/LPLayout/Learn";
import Presence from "@/components/layouts/LPLayout/Presence";
import Realized from "@/components/layouts/LPLayout/Realized";
import WhoIs from "@/components/layouts/LPLayout/WhoIs";

export function LPTemplate() {
  return (
    <>
      <Hero />
      <Realized />
      <Presence />
      <CourseForYou />
      <Learn />
      <CourseIncludesSection />
      <WhoIs />
      <Facilitate />
      <Blog />
    </>
  );
}

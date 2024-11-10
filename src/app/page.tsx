import HeroSection from "@/components/HeroSection";

import AboutSection from "@/components/(about)/AboutSection";
import ProjectSection from "@/components/(projects)/ProjectSection";
import EmailSection from "@/components/(contact)/EmailSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
      </div>
    </main>
  );
}

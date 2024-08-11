import { Footer } from "@/components/footer";
import { Wallpaper } from "@/components/wallpaper";
import { Navbar } from "@/components/navbar/navbar";

import { HeroSection } from "@/components/sections/hero";
import { ContactMe } from "@/components/sections/contact-me";
import { Experience } from "@/components/sections/experience";

export const App = () => {
  return (
    <>
      <Wallpaper />
      <Navbar />
      <div className="p-5 w-full  flex flex-col justify-center items-center lg:p-0">
        <HeroSection />
        <Experience />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
};

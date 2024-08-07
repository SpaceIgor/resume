import { Footer } from "@/components/footer";
import { Wallpaper } from "@/components/wallpaper";
import { Navbar } from "@/components/navbar/navbar";
import { HeroSection } from "@/components/sections/hero";

export const App = () => {
  return (
    <>
      <Wallpaper />
      <Navbar />
      <div className="p-5 w-full h-screen flex justify-center items-center lg:p-0">
        <HeroSection />
      </div>
      <Footer />
    </>
  );
};

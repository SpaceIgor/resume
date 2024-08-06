import { Wallpaper } from "@/components/wallpaper";

export const App = () => {
  return (
    <>
      <Wallpaper />
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className=" font-ubuntu-condensed text-2xl text-white">Test APP</h1>
      </div>
    </>
  );
};

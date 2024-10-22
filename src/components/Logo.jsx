import  { useEffect } from "react";
import { useNavigateAndScroll } from "../util/navigate";

function Logo() {
  const navigateAndScroll = useNavigateAndScroll()
  useEffect(() => {
    // Define the function inside useEffect
    function resizeHeaderOnScroll() {
      const distanceY =
          window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 100,
        logoElement = document.getElementById("logo");

      if (distanceY > shrinkOn) {
        logoElement.classList.remove("w-[160px]");
        logoElement.classList.add("w-[130px]");
      } else {
        logoElement.classList.remove("w-[130px]");
        logoElement.classList.add("w-[160px]");
      }
    }

    // Add the scroll event listener
    window.addEventListener("scroll", resizeHeaderOnScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", resizeHeaderOnScroll);
    };
  }, []);

  return (
    <div onClick={(() => navigateAndScroll("/"))} className="flex items-center gap-3">
      <img className="w-[160px]" src="/Logo.svg" alt="" id="logo" />
      {/* <img className="w-[68px] h-[100px] w-" src="/logo.svg" alt="" id="logo" /> */}
      {/* <h2 className="flex flex-col text-white  font-bold text-3xl">
        ATRION <span className="uppercase text-xl">solutions</span>
      </h2> */}
    </div>
  );
}

export default Logo;

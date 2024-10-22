import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsCard } from "../DB/db.json";
import OurProject from "./OurProject";

function OurProjects() {
  const settings = {
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    pauseOnHover: true,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="pb-10 xl:py-24">
        <div className="mb-14">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-center font-semibold  uppercase mb-8 text-2xl lg:text-4xl xl:text-5xl"
          >
            Some of our projects
          </motion.h3>
        </div>
        <Slider {...settings}>
          {projectsCard.map((project) => (
            <OurProject key={project.id} project={project} />
          ))}
        </Slider>
      </section>
    </>
  );
}

export default OurProjects;

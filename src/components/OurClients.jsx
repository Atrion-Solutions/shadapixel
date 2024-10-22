import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clients } from "../DB/db.json";
import { motion } from "framer-motion";
import OurClient from "./OurClient";
function OurClients() {
  const clientSlide = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-center font-semibold  uppercase mb-8 text-2xl lg:text-4xl xl:text-5xl"
        >
          Our clients
        </motion.h3>
        <Slider {...clientSlide}>
          {clients.map((client) => (
            <OurClient key={client.id} client={client} />
          ))}
        </Slider>
      </section>
    </>
  );
}

export default OurClients;

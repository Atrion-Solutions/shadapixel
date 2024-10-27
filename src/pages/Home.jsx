import { Container } from "../components/index";
import OurProjects from "../components/OurProjects";
import Service from "../components/Service";
import OurClients from "../components/OurClients";
import Industries from "../components/Industries";
import { Button } from "@/components/ui/button";
import { useNavigateAndScroll } from "../util/navigate";
import { motion } from "framer-motion";
// import Transition from "../components/Transition";

function Home() {
  const navigateAndScroll = useNavigateAndScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Container>
        {/* Hero Section */}
        <section className="py-20 relative">
          {/* Floating services */}
          <div className="hidden md:block">
            <div
              className="absolute animation-float serOne"
              style={{ top: "10%", left: "0%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-slate-400"></div>
                <span className="text-white">Web Development</span>
              </div>
            </div>

            <div
              className="absolute animation-float serTwo"
              style={{ top: "10%", right: "20%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-teal-400"></div>
                <span className="text-white">App Development</span>
              </div>
            </div>

            <div
              className="absolute animation-float serSix"
              style={{ top: "0%", right: "50%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-primary"></div>
                <span className="text-white">Digital Marketing</span>
              </div>
            </div>

            <div
              className="absolute animation-float serThree"
              style={{ bottom: "20%", left: "40%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-green-400"></div>
                <span className="text-white">SEO</span>
              </div>
            </div>

            <div
              className="absolute animation-float serFour"
              style={{ bottom: "5%", left: "80%" }}
            >
              {/* Floating Item */}
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded bg-red-400"></div>
                <span className="text-white">Business Analytics</span>
              </div>
            </div>
          </div>
          <div className="space-y-5 md:space-y-0">
            <div className="relative">
              {/* Shadapixel */}
              {/* <img src="/public/hero.svg" alt="shadapixel" /> */}
              <div className="text-center">
                <p className="text-transparent font-extrabold text-6xl sm:text-[130px] md:text-[150px] lg:text-[190px] xl:text-[245px] bg-[url('/header1.jpg')] bg-no-repeat bg-cover bg-clip-text bg-center text">shadapixel</p>
              </div>

            
              <div className="relative flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between">
                <img
                  className="absolute hidden sm:block top-0 w-full"
                  src="/hero-lg.svg"
                  alt=""
                />
                <div className="flex flex-col items-center sm:items-start gap-5 pt-6 md:pt-5 lg:pt-10">
                  <p className="font-text text-white tracking-wider text-lg text-center md:text-start md:pr-16 xl:text-xl">
                    Empowering Your Vision Through{" "}
                    <br className="hidden sm:block md:block lg:hidden" />{" "}
                    Innovation. <br /> Your growth is our mission.
                  </p>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      className="w-64 z-10 relative lg:mt-6"
                      onClick={() => navigateAndScroll("/contact-us")}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
                <div className="md:pt-5 lg:pt-8">
                  <h2 className="lowercase text-2xl sm:text-[40px] md:text-[54px] lg:text-7xl xl:text-[90px] text-white font-extrabold  mb-5 text-center sm:text-end">
                    By Atrion bd
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* who we are */}
        <section className="relative py-10 xl:py-24 overflow-hidden">
          {/* Text Section */}
          <div className="text-center mb-8">
            <motion.h3
              className="text-white text-center font-semibold  uppercase mb-8 text-2xl lg:text-4xl xl:text-5xl"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Who we are
            </motion.h3>
            <motion.p
              className="text-center font-text text-white sm:text-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              Welcome to Shadapixel, where innovation meets excellence in the
              ever-evolving world of technology. At Shadapixel, we don&apos;t
              just ride the waves of change – we create them. Founded on the
              principles of creativity, integrity, and excellence, we have
              assembled a dream team of tech wizards, creative geniuses, and
              strategic masterminds to bring your boldest digital visions to
              life. We are driven by a passion for helping businesses thrive in
              the digital age and are dedicated to delivering solutions that
              exceed expectations and propel them toward success.
            </motion.p>
          </div>
          {/* Button */}
          <div className="text-center mt-4">
            <motion.div
              className="inline-block"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Button onClick={() => navigateAndScroll("/about-us")}>
                Learn more about us
              </Button>
            </motion.div>
          </div>
        </section>
        {/* service section */}
        <Service />
        {/* our Projects */}
        <OurProjects />
        {/* Industries IT solution */}
        <Industries />
        {/* Our Clients */}
        <OurClients />
        {/* promotion section */}
        <section className="pb-10 xl:py-24">
          <div className="flex flex-col items-center">
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl text-white font-bold mb-8 text-center sm:text-left"
            >
              Are you ready to boost your Business?
            </motion.h3>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Button onClick={() => navigateAndScroll("/contact-us")}>
                Contact us for more
              </Button>
            </motion.div>
          </div>
        </section>
      </Container>
    </motion.div>
  );
}

export default Home;

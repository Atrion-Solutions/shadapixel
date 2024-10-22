import { useState } from "react";
import { Container } from "../components";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useNavigateAndScroll } from "../util/navigate";
import { motion } from "framer-motion";
function AboutUs() {
  const [activeButton, setActiveButton] = useState(null);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 140;

    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const navigateAndScroll = useNavigateAndScroll();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{ duration: 0.2 }}
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 pt-10 pb-24">
          <div className="space-y-10 lg:col-span-9">
            {/* <div id="video">
              <img
                className="rounded-xl w-full mb-10"
                src="/about-us.jpg"
                alt=""
              />
              <p className=" mb-10 font-text text-white text-center font-medium text-xl lg:text-2xl">
                At Atrion Solutions, we believe every business has a unique
                story to tell. Our talented team of experts specializes in a
                diverse range of services designed to elevate your brand in the
                digital realm.
              </p>
              <Separator />
            </div> */}
            <div className="mt-10 flex flex-col gap-8" id="what-sets-us-apart">
              <h3 className="font-text text-white font-semibold text-xl lg:text-2xl">
                What Sets Us Apart:
              </h3>
              <div className="flex flex-col gap-5 font-text text-white lg:text-lg">
                <h4 className="font-semibold">Web Design that Delivers:</h4>
                <p className="text-center lg:text-left">
                  Our approach to web design goes beyond aesthetics. We create
                  sophisticated digital platforms that not only captivate
                  visitors but also drive engagement and business growth. Your
                  brand, elevated.
                </p>
              </div>
              <div className="flex flex-col gap-5 font-text text-white lg:text-lg">
                <h4 className="font-semibold">Mobile Apps that Excel:</h4>
                <p className="text-center lg:text-left">
                  In a crowded marketplace, standing out is essential. Our
                  expert developers transform your ideas into intuitive,
                  user-friendly mobile applications that consistently outpace
                  the competition. Innovation in every swipe.
                </p>
              </div>
              <div className="flex flex-col gap-5 font-text text-white lg:text-lg">
                <h4 className="font-semibold">Strategic Digital Marketing:</h4>
                <p className="text-center lg:text-left">
                  We focus on more than just boosting visibility. Our targeted
                  digital marketing strategies resonate with your audience and
                  achieve measurable results, ensuring your brand shines in the
                  digital landscape. Success, by design.
                </p>
              </div>
              <div className="flex flex-col gap-5 font-text text-white lg:text-lg">
                <h4 className="font-semibold">SEO that Works:</h4>
                <p className="text-center lg:text-left">
                  Navigating the complexities of search engine optimization is
                  our specialty. With our deep expertise, your business will
                  rank consistently at the top, maximizing both visibility and
                  impact. Stay ahead, stay seen.
                </p>
              </div>
              <div className="flex flex-col gap-5 font-text text-white lg:text-lg">
                <h4 className="font-semibold">Insightful Business Analysis:</h4>
                <p className="text-center lg:text-left">
                  We go beyond conventional number-crunching. Our analysts dig
                  deep to uncover strategic opportunities, providing insights
                  that drive successful digital transformation. Turning data
                  into direction.
                </p>
                <p className="text-center lg:text-left">
                  This is how we build not just digital experiences but enduring
                  success for your brand. Because your growth is our mission.
                </p>
              </div>
            </div>
            <div className="space-y-8" id="mission">
              <img src="/our-mission.png" alt="" />
              <div>
                <p className="font-text text-white lg:text-lg">
                  At Atrion Solutions, our mission is simple: to bridge the gap
                  between cutting-edge technology and real-world business needs.
                  We recognized a world where businesses struggled to keep up
                  with the lightning-fast pace of digital evolution, so we chose
                  to become the catalyst for change.
                </p>
              </div>
            </div>
            <div className="space-y-8" id="promise">
              <img src="/our-promise.png" alt="" />
              <div>
                <p className="mb-8 font-text text-white lg:text-lg">
                  We promise to deliver a cutting-edge solution that not only
                  meets the expectations of your business but exceeds them by
                  enhancing the user experience.
                </p>
                <ul className="mb-8 list-disc text-white pl-5 font-text lg:text-lg">
                  <li>Push the boundaries of innovation</li>
                  <li>Deliver results that surpass expectations</li>
                  <li>Provide transparent communication at every stage</li>
                  <li>Stay ahead in the ever-evolving tech landscape</li>
                  <li>
                    Treat your business with the same care and dedication as our
                    own
                  </li>
                </ul>
                <div className="mb-8 flex flex-col gap-8  font-text  lg:text-lg">
                  <p className="text-white">
                    Explore the limitless possibilities with Atrion Solutions.
                    Let us be the catalyst for your digital transformation,
                    guiding you to navigate the future with confidence and
                    creativity. Together, we can shape the digital landscape of
                    tomorrow.
                  </p>
                  <p className="text-white">
                    Thank you for visiting us – we look forward to building
                    something extraordinary with you.
                  </p>
                  <Button
                    onClick={() => navigateAndScroll("/contact-us")}
                    className=" lg:w-96"
                  >
                    Let’s Talk
                  </Button>
                </div>
              </div>
              {/* Add more content as needed */}
            </div>
          </div>
          <div className="hidden lg:block lg:space-y-8 lg:col-span-3">
            <div className="flex flex-col gap-5 sticky top-[140px]">
              <div className="flex flex-col gap-5 border p-5 rounded-xl">
                {/* <Button
                  variant={"outline"}
                  onClick={() => {
                    scrollToSection("video");
                    handleButtonClick("Introductory Video");
                  }}
                  className={`${
                    activeButton === "Introductory Video"
                      ? "px-5 py-2 text-primary hover:text-primary shadow-custom-blue uppercase hover:bg-[#0C242C] border-none bg-[#0C242C]"
                      : " text-primary bg-transparent  text-2xl px-5 py-2 uppercase rounded-lg hover:backdrop-blur-xl hover:bg-[#0C242C] hover:shadow-custom-blue hover:text-primary border-none"
                  }`}
                >
                  Introductory Video
                </Button>
                <Separator /> */}
                <Button
                  onClick={() => {
                    scrollToSection("what-sets-us-apart");
                    handleButtonClick("What Sets Us Apart");
                  }}
                  className={`${
                    activeButton === "What Sets Us Apart"
                      ? "px-5 py-2 text-primary hover:text-primary shadow-custom-blue uppercase hover:bg-[#0C242C] border-none bg-[#0C242C]"
                      : "text-primary bg-transparent  text-2xl px-5 py-2 uppercase rounded-lg hover:backdrop-blur-xl hover:bg-[#0C242C] hover:shadow-custom-blue hover:text-primary border-none"
                  }`}
                >
                  What Sets Us Apart
                </Button>
                <Separator />

                <Button
                  onClick={() => {
                    scrollToSection("mission");
                    handleButtonClick("Our Mission");
                  }}
                  className={`${
                    activeButton === "Our Mission"
                      ? "flex justify-start px-5 py-2 text-primary hover:text-primary shadow-custom-blue uppercase hover:bg-[#0C242C] border-none bg-[#0C242C]"
                      : "flex justify-start text-primary bg-transparent  text-2xl px-5 py-2 uppercase rounded-lg hover:backdrop-blur-xl hover:bg-[#0C242C] hover:shadow-custom-blue hover:text-primary border-none"
                  }`}
                >
                  Our Mission
                </Button>
                <Separator />
                <Button
                  onClick={() => {
                    scrollToSection("promise");
                    handleButtonClick("Our Promise");
                  }}
                  className={`${
                    activeButton === "Our Promise"
                      ? "text-left flex justify-start px-5 py-2 text-primary hover:text-primary shadow-custom-blue uppercase hover:bg-[#0C242C] border-none bg-[#0C242C]"
                      : "flex justify-start text-primary bg-transparent text-2xl px-5 py-2 uppercase rounded-lg hover:backdrop-blur-xl hover:bg-[#0C242C] hover:shadow-custom-blue hover:text-primary border-none"
                  }`}
                >
                  Our Promise
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}

export default AboutUs;

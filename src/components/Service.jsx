import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { tabsData } from "../DB/db.json";
import { useNavigateAndScroll } from "../util/navigate";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Service() {
  const serSlide = {
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    // slidesToShow: 3,
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
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
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
  const navigateAndScroll = useNavigateAndScroll();
  return (
    <>
      <section className="py-24 lg:py-24 lg:space-y-16">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-center font-semibold  uppercase sm:mb-8 text-2xl lg:text-4xl xl:text-5xl"
        >
          What we are Serving...
        </motion.h3>
        <Tabs defaultValue="web-development">
          <div className="grid grid-cols-12 gap-10 place-content-center overflow-hidden lg:overflow-visible">
            <div className="hidden lg:block lg:col-span-2">
              <TabsList className="flex flex-col h-full justify-between bg-transparent">
                <TabsTrigger
                  className="relative px-5 py-3 text-left font-semibold whitespace-normal text-white uppercase backdrop-blur-sm data-[state=active]:px-5 data-[state=active]:py-3 data-[state=active]:shadow-custom-blue data-[state=active]:text-primary lg:text-xl xl:3xl "
                  value={"web-development"}
                >
                  Web development
                </TabsTrigger>
                <Separator />
                <TabsTrigger
                  className="relative px-5 py-3 text-left font-semibold whitespace-normal text-white uppercase backdrop-blur-sm data-[state=active]:px-5 data-[state=active]:py-3 data-[state=active]:shadow-custom-blue data-[state=active]:text-primary lg:text-xl xl:3xl "
                  value={"app-development"}
                >
                  App Development
                </TabsTrigger>
                <Separator />
                <TabsTrigger
                  className="relative px-5 py-3 text-left font-semibold whitespace-normal text-white uppercase backdrop-blur-sm data-[state=active]:px-5 data-[state=active]:py-3 data-[state=active]:shadow-custom-blue data-[state=active]:text-primary lg:text-xl xl:3xl "
                  value={"digital-marketing"}
                >
                  Digital Marketing
                </TabsTrigger>
                <Separator />
                <TabsTrigger
                  className="relative w-full px-5 py-3 text-left font-semibold whitespace-normal text-white uppercase backdrop-blur-sm data-[state=active]:px-5 data-[state=active]:py-3 data-[state=active]:shadow-custom-blue data-[state=active]:text-primary lg:text-xl xl:3xl "
                  value={"seo"}
                >
                  Seo
                </TabsTrigger>
                <Separator />
                <TabsTrigger
                  className="relative px-5 py-3 text-left font-semibold whitespace-normal text-white uppercase backdrop-blur-sm data-[state=active]:px-5 data-[state=active]:py-3 data-[state=active]:shadow-custom-blue data-[state=active]:text-primary lg:text-xl xl:3xl "
                  value={"business-analytics"}
                >
                  Business analytics
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="col-span-12 lg:col-span-10">
              {tabsData.map((item) => (
                <TabsContent className="m-0" key={item.id} value={item.id}>
                  {/* Desktop View */}
                  <Card className="bg-transparent hidden lg:grid lg:grid-cols-2 lg:gap-10 border-none shadow-none">
                    <CardHeader className="p-0">
                      <motion.img
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-full object-cover rounded-xl w-full"
                        src={item.image}
                        alt={item.title}
                      />
                    </CardHeader>
                    <CardContent className="p-0 flex flex-col h-full gap-4 justify-center">
                      <motion.CardTitle
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="font-text text-center text-2xl lg:text-3xl font-semibold text-white"
                      >
                        {item.cardTitle}
                      </motion.CardTitle>
                      <motion.CardDescription
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-center lg:text-lg font-text text-white"
                      >
                        {item.cardDescription}
                      </motion.CardDescription>
                      <CardDescription className="text-center lg:text-lg font-text font-bold text-white">
                        {item.cardTitleFooter}
                      </CardDescription>
                      <Button
                        onClick={() => navigateAndScroll("/contact-us")}
                        className="w-full lg:w-auto"
                      >
                        I want this service
                      </Button>
                    </CardContent>
                  </Card>
                  {/* phone View */}
                  <div className="lg:hidden">
                    <Slider {...serSlide}>
                      {tabsData.map((item) => (
                        <div key={item.id}>
                          <Card className="bg-transparent text-center border-none  px-3 shadow-custom-blue p-4">
                            <CardHeader className="p-0 mb-5">
                              <img
                                className="h-[250px] w-full rounded-xl object-cover"
                                src={item.image}
                                alt={item.title}
                              />
                            </CardHeader>
                            <CardContent className="p-0 flex flex-col gap-4">
                              <CardTitle className="font-text text-3xl font-bold text-primary">
                                {item.cardPhoneTitle}
                              </CardTitle>
                              <CardTitle className="font-text text-xl font-medium text-white">
                                {item.cardTitle}
                              </CardTitle>
                              <CardDescription className="font-text text-white">
                                {item.cardDescription}
                              </CardDescription>
                              <CardDescription className="font-text text-base font-medium text-white">
                                {item.cardTitleFooter}
                              </CardDescription>
                              <Button className="w-full">
                                I want this service
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </section>
    </>
  );
}

export default Service;

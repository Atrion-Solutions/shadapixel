import { motion } from "framer-motion";
import { industries } from "../DB/db.json";
import Industry from "./Industry";
function Industries() {
  return (
    <>
      <section className="pb-10 xl:py-24">
        <div className="mb-14 text-center text-white">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center font-semibold  uppercase mb-8 text-2xl lg:text-4xl xl:text-5xl"
          >
            Empowering Diverse Industries with Tailored IT Solutions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="font-text lg:text-lg tracking-widest"
          >
            At Shadapixel Solutions, we recognize that every industry faces
            unique challenges. Our expert team delivers tailored IT solutions
            across diverse sectors. From transforming healthcare with advanced
            technology to optimizing manufacturing and enhancing retail
            engagement, we have the expertise to propel your business forward.
            We don&apos;t just adapt to your industry; we innovate to align our
            solutions with your specific goals.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {industries.map((industry) => (
            <Industry key={industry.id} industry={industry} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Industries;

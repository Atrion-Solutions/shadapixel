import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function Industry({ industry }) {
  const { id, image, title, content } = industry;

  return (
    <>
      <motion.div
        key={id}
        className="flex items-center gap-5 py-10 pr-3 pl-5 border border-[#557078] rounded-lg hover:scale-105 hover:shadow-custom-blue duration-300 backdrop-blur-sm"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <motion.img
            className="max-w-[120px]"
            src={image}
            alt="health-care-logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div className="font-text text-white">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p>{content}</p>
        </div>
      </motion.div>
    </>
  );
}

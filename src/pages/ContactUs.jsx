import { ContactForm, Container } from "../components/index";
import { motion } from "framer-motion";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5">
          <div className=" text-white border border-[#557078] rounded-lg hover:shadow-custom-blue duration-300 p-3 sm:p-5 backdrop-blur-sm hover:scale-105">
            <span className="text-center flex justify-center items-center flex-col">
              <CiLocationOn className="text-5xl text-primary" />
              House# 422, Rd# 7 Baridhara D.O.H.S., Dhaka-1206
            </span>
          </div>
          <div className=" text-white border border-[#557078] rounded-lg hover:shadow-custom-blue duration-300 p-3 sm:p-5 backdrop-blur-sm hover:scale-105">
            <span className="flex justify-center items-center flex-col">
              <CiMail className="text-5xl text-primary" />
              Info@shadapixel.com
            </span>
          </div>
          <div className=" text-white border border-[#557078] rounded-lg hover:shadow-custom-blue duration-300 p-3 sm:p-5 backdrop-blur-sm hover:scale-105">
            <span className="flex justify-center items-center flex-col">
              <CiPhone className="text-5xl text-primary" />
              +1 (850) 988-0052
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-5 py-24">
          <div className="flex flex-col justify-end gap-5">
            <div className="space-y-5">
              <p className=" text-white xl:text-lg">
                You can send us a message using this form, or contact us by
                email or phone.
              </p>
            </div>
            <div
              className="md:col-span-12 lg:col-span-6 flex flex-col justify-end"
              id="contucUsForm"
            >
              <ContactForm />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-end items-end"
          >
            <img src="/contact.png" alt="" />
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
}

export default ContactUs;

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const ContactSubmit = async (data) => {
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://admin.atrionsolutions.com/api/queries",
        { ...data, phone }
      );
      const resData = await response.data;
      if (resData.status !== "success") {
        setError(resData.errors);
      }
      setPopup(true);
      reset();
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
      setPhone("");
    }
  };

  const closeDialog = () => {
    setPopup(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {error && <p className="text-red-600">{error}</p>}

      {/* AlertDialog shown when popup is true */}
      {popup && (
        <AlertDialog open={popup} onOpenChange={setPopup}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">
                Message Sent!
              </AlertDialogTitle>
              <AlertDialogDescription>
                Your message has been sent successfully. We will get back to you
                shortly.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={closeDialog}>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      <form onSubmit={handleSubmit(ContactSubmit)}>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-12">
            <Label className="font-bold text-lg text-white" htmlFor="message">
              What’s in your mind?*
            </Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              {...register("message")}
            />
          </div>
          <div className="md:col-span-6">
            <Label className="font-bold text-lg text-white" htmlFor="fullname">
              Full name*
            </Label>
            <Input
              className="py-4 px-8"
              type="text"
              id="fullname"
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
          </div>
          <div className="md:col-span-6">
            <Label className="font-bold text-lg text-white" htmlFor="email">
              Business email*
            </Label>
            <Input
              className="py-4 px-8"
              type="email"
              id="email"
              placeholder="Youremail@yourbusiness.com"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "Email address must be valid",
                },
              })}
            />
          </div>
          <div className="md:col-span-6">
            <Label className="font-bold text-lg text-white" htmlFor="company">
              Company
            </Label>
            <Input
              className="py-4 px-8"
              type="text"
              id="company-name"
              placeholder="Your Business Name"
              {...register("company", { required: true })}
            />
          </div>
          <div className="relative md:col-span-6">
            <Label className="font-bold text-lg text-white" htmlFor="phone">
              Phone No
            </Label>
            <PhoneInput
              country={"bd"}
              value={phone}
              containerClass="shadcn-input-wrapper"
              onChange={(value) => {
                setPhone(`+${value}`);
              }}
            />
          </div>
          <div className="md:col-span-12">
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send it to us"}
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}

export default ContactForm;

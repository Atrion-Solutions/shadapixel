import { Link, NavLink } from "react-router-dom";
import { Logo, Container } from "../index";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { useNavigateAndScroll } from "../../util/navigate";

function Footer() {
  const navigateAndScroll = useNavigateAndScroll();

  return (
    <section>
      <Container>
        <div className="grid sm:grid-cols-2 items-start  gap-7 mb-10">
          <div className="flex flex-col items-center sm:items-start">
            <Link to={"/"}>
              <Logo />
            </Link>
            <p className="font-Inter text-white text-lg mt-8 w-full md:max-w-sm text-center sm:text-left">
              {" "}
              Building digital experiences that inspire and innovate.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="flex flex-col items-center sm:items-start gap-8">
              <ul className="font-Inter text-white flex flex-col gap-2 items-center sm:items-start">
                <li className="flex items-center gap-5 xl:text-lg">
                  <CiLocationOn className="text-primary" size={20} />
                  House# 422, Rd# 7<br/>
                  Baridhara D.O.H.S., Dhaka-1206
                </li>
                <li className="flex items-center gap-5 xl:text-lg">
                  <CiMail className="text-primary" size={20} />
                  Info@shadapixel.com
                </li>
              </ul>
              <div className="flex flex-col items-center sm:items-start">
                <p className="font-Inter text-lg font-medium text-white mb-2">
                  Follow us
                </p>
                <div className="flex gap-5">
                  {/* <Link
                    className="text-white"
                    target="_blank"
                    to={`https://shadapixel.com/`}
                  >
                    <FaLinkedinIn className="text-primary" size={30} />
                  </Link>*/}
                  <Link
                    className="text-white"
                    target="_blank"
                    to={`https://www.facebook.com/shadapixel`}
                  >
                    <ImFacebook className="text-primary" size={30} />
                  </Link>
                  <Link target="_blank" to={`https://www.youtube.com/@shadapixel`}>
                    <FaYoutube className="text-primary" size={30} />
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid lg:grid-cols-3 gap-5 py-10">
          <div>
            <p className="text-white text-center lg:text-left">
              © 2024 Shadapixel by Atrion BD
            </p>
          </div>
          <div className="flex justify-center">
            <ul className="flex items-center gap-3 text-white h-5 font-Inter text-lg font-medium">
              <li>
                <NavLink
                  onClick={() => navigateAndScroll("/")}
                  to={"/"}
                  className={({ isActive }) =>
                    `block duration-200 ${
                      isActive ? "text-primary" : "text-white"
                    } hover:text-primary font-Inter text-lg font-medium tracking-wider`
                  }
                >
                  Home
                </NavLink>
              </li>
              <Separator orientation="vertical" />
              <li>
                <NavLink
                  onClick={() => navigateAndScroll("/about-us")}
                  to={"/about-us"}
                  className={({ isActive }) =>
                    `block duration-200 ${
                      isActive ? "text-primary" : "text-white"
                    } hover:text-primary font-Inter text-lg font-medium tracking-wider`
                  }
                >
                  About us
                </NavLink>
              </li>
              <Separator orientation="vertical" />
              <li>
                <NavLink
                  onClick={() => navigateAndScroll("/contact-us")}
                  to={"/contact-us"}
                  className={({ isActive }) =>
                    `block duration-200 ${
                      isActive ? "text-primary" : "text-white"
                    } hover:text-primary font-Inter text-lg font-medium tracking-wider`
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end gap-5 text-white font-Inter">
            <Link
              onClick={() => navigateAndScroll("/privacy-policy")}
              to={"/privacy-policy"}
              className="hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              onClick={() => navigateAndScroll("/terms-use")}
              to={"/terms-use"}
              className="hover:text-primary"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;

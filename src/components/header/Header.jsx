import { useState, useEffect, useRef } from "react";
import { Logo, Container } from "../index";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigateAndScroll } from "../../util/navigate";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function shadowOnScroll() {
      const distanceY =
        window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 10;
      const logoElement = document.getElementById("navBar");

      if (distanceY > shrinkOn) {
        logoElement.classList.add("shadow-2xl");
        logoElement.classList.remove("bg-transparent");
        logoElement.classList.add("backdrop-blur-md");
      } else {
        logoElement.classList.remove("shadow-2xl");
        logoElement.classList.remove("bg-transparent");
        logoElement.classList.remove("backdrop-blur-md");
      }
    }

    window.addEventListener("scroll", shadowOnScroll);

    return () => {
      window.removeEventListener("scroll", shadowOnScroll);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About Us",
      slug: "/about-us",
    },
    {
      name: "Contact Us",
      slug: "/contact-us",
    },
  ];

  const menuVariants = {
    open: {
      x: 0,
      transition: { stiffness: 20 },
    },
    closed: {
      x: "-100%",
      transition: { stiffness: 300 },
    },
  };
  const navigateAndScroll = useNavigateAndScroll();
  return (
    <section className="sticky top-0 left-0 z-50 transition-all" id="navBar">
      <Container>
        <div className="flex justify-between items-center py-5 relative">
          <Link to={`/`}>
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-1">
            {navItems.map(({ name, slug }) => (
              <li key={name}>
                <NavLink
                  onClick={() => navigateAndScroll(`${slug}`)}
                  to={`${slug}`}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-primary" : "text-white"
                    } hover:text-primary font-Inter text-lg font-medium tracking-wider`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <motion.div
            ref={menuRef}
            animate={toggle ? "open" : "closed"}
            variants={menuVariants}
            initial="closed"
            className="fixed top-0 left-0 p-8 w-64 h-screen bg-background text-white shadow-md z-40 md:hidden"
          >
            <ul className="flex flex-col gap-14">
              {navItems.map(({ name, slug }) => (
                <li key={name}>
                  <NavLink
                    to={slug}
                    onClick={() => {
                      navigateAndScroll(slug);
                      setToggle(false);
                    }}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-primary" : "text-white"
                      } hover:text-primary font-Inter text-lg font-medium tracking-wider`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Menu Toggle Button */}
          <button
            onClick={handleToggle}
            className="text-4xl text-white md:hidden"
          >
            {toggle ? <IoClose /> : <HiOutlineMenuAlt4 />}
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Header;

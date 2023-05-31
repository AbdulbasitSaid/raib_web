"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavItem from "./MobileNavItem";
import { useState } from "react";
import { motion } from "framer-motion";
type LinkItems = Array<{ link: string; title: string }>;

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const linkItems: LinkItems = [
    { link: "#home", title: "home" },
    { link: "#about", title: "about" },
    { link: "#mission", title: "mission" },
    { link: "#services", title: "services" },
    { link: "#clients", title: "client" },
    { link: "#contact", title: "contact" },
  ];
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };
  return (
    <div className="absolute z-20 border-[1px] border-[rgba(255,255,255,0.2)] rounded-[2.5rem] left-1/2 right-1/2 -translate-x-1/2  bg-[rgba(255,255,255,0.05)] top-6 w-10/12 flex flex-col overflow-clip backdrop-blur-md">
      {/* mobile nav */}
      <div className="  flex justify-between items-center p-6  ">
        <Image
          src="/img/raib_logo_v2.png"
          alt={"logo"}
          width={50}
          height={50}
        />
        <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          <GiHamburgerMenu className=" text-black  w-6 h-6" />
        </button>
      </div>
      <motion.div
        animate={isMobileNavOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {" "}
        {isMobileNavOpen
          ? linkItems.map((item) => (
              <MobileNavItem
                title={item.title}
                link={item.link}
                key={linkItems.indexOf(item)}
              />
            ))
          : null}
      </motion.div>
    </div>
  );
}

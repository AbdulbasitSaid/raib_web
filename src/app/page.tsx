/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import ContactForm from "./components/ContactForm";
import ServicesSlider from "./components/ServicesSlider";
import OurTeam from "./components/OurTeam";
export default function Home() {
  const newLocal = (
    <Image src={"/img/home_bg.jpg"} alt="Picture of the author" fill />
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen bg-white">
      {/* home */}
      {/* /Todo made tint */}
      <div className="flex flex-col p-6 justify-center w-screen h-screen  gap-10 bg-[url('/img/home_bg.jpg')] bg-center bg-no-repeat bg-cover text-white relative ">
        <div className=" absolute h-full w-full bg-[rgba(0,0,0,0.6)] left-0 top-0"></div>
        {/* Todo add parallax */}
        <div className=" z-10 flex flex-wrap gap-8">
          <p className=" text-lg font-thin ">Premier consultancy firm</p>
          <h3 className="text-4xl font-bold ">
            Welcome to RAIB Consultants Et’el.
          </h3>
          <div className="flex items-center gap-8 ">
            {/* Todo add amazing call to action */}
            {/* <div className=" h-32 w-32 bg-primary rounded-full text-white uppercase">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  id="circlePath"
                  color="white"
                  d="
                M 10, 50
                a 40,40 0 1,1 80,0
                40,40 0 1,1 -80,0
              "
                />
                <text>
                  <textPath href="#circlePath">
                    explore more - explore more -
                  </textPath>
                </text>
              </svg>
            </div> */}
            <div>
              <p className=" text-lg font-normal uppercase text-white">
                explore our portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <div
        className="flex flex-col items-start justify-center w-full min-h-screen p-6 bg-white text-black gap-8"
        id="about"
      >
        <h3 className="text-xl font-thin">About Us</h3>
        <p>
          At RAIB Consultants Et’el Nig. Ltd, we believe in harnessing the power
          of our team to provide practical solutions and services to our
          clients. From Executive Management to Managers, personnel, and
          administrative staff, we work together to ensure the success of our
          clients. Our leadership includes distinguished professionals with vast
          experiences in their respective fields.{" "}
          <a href="#team" className=" link text-primary uppercase font-thin">
            find out more
          </a>
        </p>
        <hr className="w-full" />
        {/* about image */}
        <div className=" h-80 w-full bg-[url('/img/about_img.jpg')] relative overflow-clip bg-cover">
          <div className=" h-1/2 w-1/2 bg-green-400 absolute right-2 -bottom-8 rotate-12"></div>
          <div className=" h-2/5 w-1/2 bg-gray-100 absolute right-0 bottom-0 p-6">
            <p className="font-bold text-2xl">50+</p>
            <p className="uppercase font-thin">combined years of experience</p>
          </div>
        </div>
      </div>
      {/*  our mission */}
      <div className="flex flex-col items-start justify-center min-h-16 p-8 gap-8 bg-gray-100 text-black ">
        <p className="font-thing text-lg">Our Mission & Vision</p>
        <p>
          Our mission is to provide seamless services using the latest
          technology through our team of professionals specializing in pension
          and insurance administration. We envision providing sustainable
          solutions to challenges faced by the public and private sectors and
          individuals in a professional, transparent, and swift manner.
        </p>
      </div>
      {/* services */}
      <div className=" flex w-screen gap-12 relative  flex-nowrap overflow-scroll bg-gray-100">
        <h1 className=" text-4xl uppercase font-bold text-gray-700 whitespace-nowrap ">
          Retirement and pension
        </h1>
        <h1 className=" text-4xl uppercase font-bold text-white whitespace-nowrap drop-shadow-[0px_0px_0.5px_rgba(0,0,0.5)]">
          Human resources services
        </h1>
        <h1 className=" text-4xl uppercase font-bold text-gray-700  whitespace-nowrap">
          Tech Services
        </h1>
        <h1 className=" text-4xl uppercase font-bold text-white drop-shadow-[0px_0px_0.5px_rgba(0,0,0.5)] whitespace-nowrap ">
          Insurance
        </h1>
      </div>
      <div className="flex flex-col items-start px-8 py-24 gap-6 bg-gray-100 w-full text-black">
        <div>
          <p className="font-thin uppercase">main directions</p>
          <h3 className="text-4xl font-bold">Services.</h3>
        </div>
        <p>We offer a wide array of services, catering to different fields:</p>

        {/* services carousel */}
        <ServicesSlider />
      </div>
      {/* team */}
      <div
        id="team"
        className="flex flex-col items-start justify-center min-h-screen w-full p-8 gap-6 bg-gray-100 text-black"
      >
        <p className="font-thin uppercase">working miracles</p>
        <h3 className="text-4xl font-bold">Meet Our Team.</h3>
        <br />
        {/* team list */}
        <OurTeam />
      </div>
      {/* contact */}
      <div className=" flex flex-col bg-slate-200 min-h-screen justify-center p-6 text-black gap-6">
        <p className="uppercase font-light">get in touch</p>
        <h3 className="text-4xl font-bold">
          Let us provide you with working solutions.
        </h3>
        <p className=" font-light">
          Reach out to us for more information about our services, or to
          schedule a consultation
        </p>
        <a
          href="tel:+234 090 9090"
          type="tel"
          className=" font-bold link text-primary text-2xl"
        >
          +234 080 333 8989
        </a>
        {/* socials */}
        <div className="flex gap-8">
          <a href=""> Facebook</a>
          <a href=""> Twitter</a>
          <a href=""> Linkedin</a>
          <a href=""> Instagram</a>
        </div>
        {/* contact form */}
        <ContactForm />
      </div>
    </main>
  );
}

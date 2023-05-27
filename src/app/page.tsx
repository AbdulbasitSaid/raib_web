import Image from "next/image";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen bg-white">
      {/* home */}
      {/* /Todo made tint */}
      <div className="flex flex-col p-6 justify-center w-screen h-screen  gap-10 bg-[url('/img/home_bg.jpg')] bg-center bg-no-repeat bg-cover text-white ">
        {/* Todo add parallax */}
        <div className="">
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
      <div className="flex flex-col items-start justify-center w-full min-h-screen p-6 bg-white text-black gap-8">
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
          <div className=" h-2/5 w-1/2 bg-gray-100 absolute right-0 bottom-0"></div>
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
      <div className="flex flex-col min-h-screen items-start px-8 py-24 gap-6 bg-gray-100 w-full text-black">
        <p className="font-thin uppercase">main directions</p>
        <h3 className="text-6xl font-bold">Services.</h3>
        <p>We offer a wide array of services, catering to different fields:</p>
        <div className="flex gap-6">
          <div className="btn btn-outline rounded-full w-12 h-12 relative">
            <VscArrowLeft />
          </div>
          <div className="btn btn-outline rounded-full w-12 h-12 relative">
            <VscArrowRight />
          </div>
        </div>
        {/* services carousel */}
        <div className="w-full h-96 carousel ">
          <div className="w-full h-full carousel-item">
            <div className="flex flex-col gap-6 justify-end p-2">
              <Image
                src="/img/letter-r.png"
                alt=""
                width={80}
                height={80}
                className=" my-2"
              />

              <p className="font-bold">Retirement and Pension Services</p>
              <p>
                We provide comprehensive retirement and pension consultancy
                services
              </p>
              <div className="flex gap-4 items-center">
                <div className="btn btn-outline h-12 w-12 rounded-full relative">
                  <VscArrowRight className=" -rotate-45" />
                </div>
                <p className="uppercase font-mono text-sm">read more</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-yellow-300  carousel-item">
            Our HR services are designed to drive your business towards greater
            success
          </div>
          <div className="w-full h-full bg-red-300  carousel-item">
            From ICT support, web design, to software development, we provide a
            range of ICT services.
          </div>
          <div className="w-full h-full bg-yellow-950  carousel-item">
            we offer robust insurance consultancy services across all classes of
            general insurance policies.
          </div>
        </div>
      </div>
      {/* team */}
      <div
        id="team"
        className="flex flex-col items-start justify-center min-h-screen w-full p-8 gap-6 bg-gray-100 text-black"
      >
        <p className="font-thin uppercase">the avengers</p>
        <h3 className="text-4xl font-bold">Meet Our Team.</h3>
      </div>
      {/* contact */}
      <div className=" flex flex-col bg-slate-200 min-h-screen justify-center p-6 text-black gap-6">
        <p className="uppercase font-light">get in touch</p>
        <h3 className="text-4xl font-bold">
          Let's provide you with working solutions.
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
        <form className="flex flex-col gap-4">
          <input className="" />
        </form>
      </div>
    </main>
  );
}

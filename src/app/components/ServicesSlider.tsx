"use client";

import { useState } from "react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import Image from "next/image";
import ServicesSliderItem from "./ServicesSlideItem";
export default function ServicesSlider() {
  return (
    <div>
      <div className="flex gap-6">
        <div className="btn btn-circle w-12 h-12 relative bg-transparent">
          <VscArrowLeft />
        </div>
        <div className="btn btn-circle rounded-full w-12 h-12 relative bg-transparent">
          <VscArrowRight />
        </div>
      </div>

      <div className="w-full h-96 carousel ">
        <ServicesSliderItem
          title={"Retirement and Pension Services"}
          description={
            " We provide comprehensive retirement and pension consultancy services"
          }
          image={"/img/letter-r.png"}
        />
        <ServicesSliderItem
          title={"Human Resources Services"}
          description={
            " Our HR services are designed to drive your business towards greater success"
          }
          image={"/img/letter-h.png"}
        />

        <ServicesSliderItem
          title={"Tech Services:"}
          description={
            "From ICT support, web design, to software development, we provide a range of ICT services."
          }
          image={"/img/letter-t.png"}
        />
        <ServicesSliderItem
          title={"Insurance"}
          description={
            " We offer robust insurance consultancy services across all classes of general insurance policies."
          }
          image={"/img/letter-i.png"}
        />
      </div>
    </div>
  );
}

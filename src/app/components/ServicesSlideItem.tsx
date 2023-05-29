"use client";
import exp from "constants";
import { useState } from "react";
import Image from "next/image";
import { VscArrowRight } from "react-icons/vsc";
export default function ServicesSliderItem(props: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="carousel-item w-full h-full">
      <div className="flex flex-col gap-6 justify-end p-2">
        <Image
          src={props.image}
          alt=""
          width={80}
          height={80}
          className=" my-2"
        />
        <p className="font-bold">{props.title}</p>
        <p>{props.description}</p>
        <div className="flex gap-4 items-center">
          <div className="btn btn-circle h-12 w-12 rounded-full relative bg-transparent">
            <VscArrowRight className=" -rotate-45" />
          </div>
          <p className="uppercase font-mono text-sm">read more</p>
        </div>
      </div>
    </div>
  );
}

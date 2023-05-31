"use client";

type LinkItem = {
  title: string;
  link?: string;
};

export default function MobileNavItem(
  props: LinkItem = { title: "", link: "#" }
) {
  return (
    <div className="relative">
      <div className="p-6 w-full border-t border-[rgba(255,255,255,0.2)]  ">
        <a
          href={props.link}
          className="w-full block text-white uppercase font-bold text-sm "
        >
          {props.title}
        </a>
      </div>
    </div>
  );
}

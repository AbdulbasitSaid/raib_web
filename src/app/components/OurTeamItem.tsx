/* eslint-disable @next/next/no-img-element */
export default function OurTeamItem(props: {
  name: string;
  imgUrl: string;
  role: string;
}) {
  return (
    <div className="flex flex-col gap-4 max-w-md ">
      <img
        src={props.imgUrl}
        alt={props.name}
        className=" h-auto h-[30rem] w-screen object-cover "
      />
      <div>
        <p className=" text-sm">{props.role}</p>
        <p className="text-lg ">{props.name}</p>
      </div>
    </div>
  );
}

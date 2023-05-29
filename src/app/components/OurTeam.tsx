import OurTeamItem from "./OurTeamItem";

export default function OurTeam() {
  return (
    <div className="flex flex-wrap gap-8">
      <OurTeamItem
        imgUrl="/img/sample_female.jpeg"
        name={"Rahmatu Ibrahim"}
        role={"CEO"}
      />
      <OurTeamItem
        imgUrl="/img/contact.jpeg"
        name={"Taibat Ishaq Musa"}
        role={"Enjoyment Officer"}
      />
      <OurTeamItem
        imgUrl="/img/sample_team.jpeg"
        name={"Sample User"}
        role={"Sample Role"}
      />
      <OurTeamItem
        imgUrl="/img/abdul.jpeg"
        name={"Abdulbasit Said Ibrahim"}
        role={"CTO"}
      />
    </div>
  );
}

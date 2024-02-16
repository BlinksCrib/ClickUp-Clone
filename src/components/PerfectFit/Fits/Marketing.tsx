import PerfectFits from "../../../utils/PerfectFits";
import clientImg from "../../../assets/finastra-headshot.png";

import { Calendar, Docs, Finastra, Setting, Write } from "../../../utils/Icons";

interface Get {
  icon: any;
  name: string;
}

const Marketing = () => {
  const fits: string[] = [
    "Build visual plans that keep teams on track",
    "Fast track delivery with templates and calendars",
    "Leverage AI to accelerate content creation",
  ];

  const toGet: Get[] = [
    {
      icon: Setting,
      name: "Flexible workflows for every team",
    },
    {
      icon: Calendar,
      name: "Visual roadmaps and calendars",
    },
    {
      icon: Write,
      name: "AI-powered writing support",
    },
    {
      icon: Docs,
      name: "Tasks, docs, spreadsheets, and more",
    },
  ];
  return (
    <div>
      <PerfectFits
        heading="The complete marketing solution"
        desc="The all-in-one work hub for modern marketing teams, completely free."
        fits={fits}
        clientImg={clientImg}
        small="ClickUp enables us to optimize resources more effectively"
        span="and align our GTM across the business."
        clientCompany={<Finastra />}
        toGet={toGet}
      />
    </div>
  );
};

export default Marketing;

import PerfectFits from "../../../utils/PerfectFits";
import clientImg from "../../../assets/hawkemedia-headshot.png";

import { Docs, Hawke, Image, Setting, Speed } from "../../../utils/Icons";

interface Get {
  icon: any;
  name: string;
}

const Agency = () => {
  const fits: string[] = [
    "Visualize projects, progress, and teamwork",
    "Speed up collaboration and feedback cycles",
    "Optimize resources and productivity",
  ];

  const toGet: Get[] = [
    {
      icon: Setting,
      name: "Flexible workflows for any project",
    },
    {
      icon: Docs,
      name: "Tasks, docs, spreadsheets, and more",
    },
    {
      icon: Image,
      name: "Resource and workload optimization",
    },
    {
      icon: Speed,
      name: "Dashboards and insights",
    },
  ];
  return (
    <div>
      <PerfectFits
        heading="The complete agency solution"
        desc="Deliver higher quality client work that's more profitable, faster."
        fits={fits}
        clientImg={clientImg}
        small="Our executive team decreased project delay by over 70%"
        span="throughout our first year using ClickUp."
        clientCompany={<Hawke />}
        toGet={toGet}
      />
    </div>
  );
};

export default Agency;

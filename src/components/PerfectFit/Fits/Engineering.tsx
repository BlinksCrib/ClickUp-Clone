import PerfectFits from "../../../utils/PerfectFits";
import clientImg from "../../../assets/pressed-headshot.png";

import { Agile, Docs, Pressed, Speed, TwoWay } from "../../../utils/Icons";

interface Get {
  icon: any;
  name: string;
}

const Engineering = () => {
  const fits: string[] = [
    "Get flexible agile workflows for fast moving teams",
    "Track dependencies and resources across squads",
    "Automate and integrate across your tech stack",
  ];

  const toGet: Get[] = [
    {
      icon: Agile,
      name: "Agile task and issue management",
    },
    {
      icon: Speed,
      name: "Insights and dashboards",
    },
    {
      icon: TwoWay,
      name: "Seamless 2-way Git sync",
    },
    {
      icon: Docs,
      name: "Tasks, docs, spreadsheets, and more",
    },
  ];
  return (
    <div>
      <PerfectFits
        heading="More building, less busy work"
        desc="Your end-to-end product development platform, completely free."
        fits={fits}
        clientImg={clientImg}
        small="ClickUp keeps our engineering department hyper-focused"
        span="on the right initiatives."
        clientCompany={<Pressed />}
        toGet={toGet}
      />
    </div>
  );
};

export default Engineering;

import PerfectFits from "../../../utils/PerfectFits";
import clientImg from "../../../assets/lulu-headshot.png";

import { Agile, Board, Docs, Lulu, Speed } from "../../../utils/Icons";

interface Get {
  icon: any;
  name: string;
}

const Product = () => {
  const fits: string[] = [
    "Get flexible agile workflows for fast moving teams",
    "Reduce development time with visual roadmaps",
    "Communicate product updates and priorities",
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
      icon: Board,
      name: "Whiteboards and diagramming",
    },
    {
      icon: Docs,
      name: "Tasks, docs, spreadsheets, and more",
    },
  ];
  return (
    <div>
      <PerfectFits
        heading="Plan, build, & ship, all in one place"
        desc="The only all-in-one product management toolkit, completely free."
        fits={fits}
        clientImg={clientImg}
        small="With ClickUp, we’ve regained hours of wasted time compared to Jira."
        span="Even better, we’ve accelerated our product releases."
        clientCompany={<Lulu />}
        toGet={toGet}
      />
    </div>
  );
};

export default Product;

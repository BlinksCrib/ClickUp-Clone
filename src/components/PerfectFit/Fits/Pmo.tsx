import PerfectFits from "../../../utils/PerfectFits";
import clientImg from "../../../assets/convene-headshot.png";
import { Convene, Docs, Image, Setting, Speed } from "../../../utils/Icons";

interface Get {
  icon: any;
  name: string;
}

const Pmo = () => {
  const fits: string[] = [
    "Reduce delivery time with custom templates",
    "Track effort to impact with OKR planning",
    "Manage complex projects at scale",
  ];

  const toGet: Get[] = [
    {
      icon: Setting,
      name: "Flexible workflows for every team",
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
        heading="Deliver projects on time, every time"
        desc="Get teams running more efficiently with a complete project management solution."
        fits={fits}
        clientImg={clientImg}
        small="ClickUp brings all of our teams together into one place"
        span="so that they can stay on track, collaborate and communicate."
        clientCompany={<Convene />}
        toGet={toGet}
      />
    </div>
  );
};

export default Pmo;

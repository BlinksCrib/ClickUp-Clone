import { useRef, useState } from "react";
import dashboards from "../../assets/dashboards.png";
import dashboardsSm from "../../assets/dashboards-sm.png";
import ai from "../../assets/ai.png";
import aiSm from "../../assets/ai-sm.png";
import forms from "../../assets/forms.png";
import formsSm from "../../assets/forms-sm.png";
// import dashboardsSm from "../../assets/dashboards-sm.png";

const ProjectWeCan = () => {
  const [project, setProject] = useState("Dashboards");
  const containerRef = useRef<HTMLDivElement>(null);

  const theProject = [
    { icon: "", name: "Dashboards" },
    { icon: "", name: "AI" },
    { icon: "", name: "Forms" },
    { icon: "", name: "Sprints" },
    { icon: "", name: "Docs" },
    { icon: "", name: "Time-tracking" },
    { icon: "", name: "Chat" },
    { icon: "", name: "Whiteboards" },
    { icon: "", name: "Projects" },
  ];

  const handleClick = (item: { icon: string; name: string }) => {
    setProject(item.name);
    // const container = containerRef.current;
    // if (container) {
    //   const item = container.children[i];
    //   const scrollLeft =
    //     item.offsetLeft - (container.offsetWidth - item.offsetWidth) / 2;
    //   container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    // }
  };

  // Find the index of "Dashboards"
  //   const dashboardIndex = theProject.findIndex(
  //     (item) => item.name === "Dashboards"
  //   );

  //   // Create a new array where "Dashboards" is in the middle
  //   const rearrangedProject = [
  //     ...theProject.slice(dashboardIndex + 1),
  //     ...theProject.slice(0, dashboardIndex),
  //     theProject[dashboardIndex],
  //     ...theProject.slice(dashboardIndex + 1),
  //     ...theProject.slice(0, dashboardIndex),
  //   ];

  return (
    <div>
      <div
        className="flex justify-center items-center"
        ref={containerRef}
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "100%",
          textAlign: "center",
        }}
      >
        {theProject?.map((item, i) => (
          // Here, you can do whatever you need to do with each item
          //   console.log(item);
          <div
            key={i}
            onClick={() => handleClick(item)}
            className="flex justify-center items-center"
          >
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center w-full mt-8">
        {project === "Dashboards" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={dashboardsSm}
              alt={project}
              className="w-[40%] absolute bottom-0 right-0"
            />
            <img src={dashboards} alt={project} />
          </div>
        ) : project === "AI" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={aiSm}
              alt={project}
              className="w-[40%] absolute bottom-0 right-0"
            />
            <img src={ai} alt={project} />
          </div>
        ) : project === "Forms" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={formsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={forms} alt={project} />
          </div>
        ) : project === "Sprints" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={formsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={forms} alt={project} />
          </div>
        ) : project === "Docs" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={formsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={forms} alt={project} />
          </div>
        ) : project === "Time tracking" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={formsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={forms} alt={project} />
          </div>
        ) : project === "Chat" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={formsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={forms} alt={project} />
          </div>
        ) : project === "Whiteboards" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={formsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={forms} alt={project} />
          </div>
        ) : (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={formsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={forms} alt={project} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectWeCan;

import { useState } from "react";
import dashboards from "../../assets/dashboards.png";
import dashboardsSm from "../../assets/dashboards-sm.png";
import ai from "../../assets/ai.png";
import aiSm from "../../assets/ai-sm.png";
import forms from "../../assets/forms.png";
import formsSm from "../../assets/forms-sm.png";
import sprints from "../../assets/sprints.png";
import sprintsSm from "../../assets/sprints-sm.png";
import docs from "../../assets/docs.png";
import docsSm from "../../assets/docs-sm.png";
import timetracking from "../../assets/timetracking.png";
import timetrackingSm from "../../assets/timetracking-sm.png";
import chat from "../../assets/chat.png";
import chatSm from "../../assets/chat-sm.png";
import whiteboard from "../../assets/whiteboard.png";
import whiteboardSm from "../../assets/whiteboard-sm.png";
import projects from "../../assets/projects.png";
import projectsSm from "../../assets/projects-sm.png";

import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
  Project9,
} from "../../utils/Icons";
// import dashboardsSm from "../../assets/dashboards-sm.png";

const ProjectWeCan = () => {
  const [project, setProject] = useState("Dashboards");
  // const [activeIndex, setActiveIndex] = useState(-1);

  const theProject = [
    { icon: Project2, name: "Dashboards" },
    { icon: Project3, name: "AI" },
    { icon: Project4, name: "Forms" },
    { icon: Project5, name: "Sprints" },
    { icon: Project6, name: "Docs" },
    { icon: Project7, name: "Time-tracking" },
    { icon: Project8, name: "Chat" },
    { icon: Project9, name: "Whiteboards" },
    { icon: Project1, name: "Projects" },
  ];

  const handleClick = (item: { icon: any; name: string }) => {
    setProject(item.name);
    // setActiveIndex(i)
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
        className="flex w-full lg:justify-center justify-start items-center mt-[4rem] lg:mx-0 px-6"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        {theProject?.map((item, i) => (
          // Here, you can do whatever you need to do with each item
          //   console.log(item);
          <div
            key={i}
            onClick={() => handleClick(item)}
            className="flex justify-center items-center flex-col mr-10 cursor-pointer"
            // style={{ transform: `translateX(${(activeIndex - i) * 100}%)` }}
          >
            <aside
              className={`rounded-lg px-3 py-3 h-[4rem] w-[4rem] flex justify-center items-center ${
                project === item.name
                  ? "bg-[linear-gradient(130deg,#24223e,#282642)]"
                  : ""
              }`}
            >
              <item.icon project={project} name={item.name} />
            </aside>
            <h1
              className={` ${
                project === item.name
                  ? "text-[#24223e] font-bold"
                  : "text-[#7F76B3] font-semibold"
              }`}
            >
              {item.name}
            </h1>
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
            <img src={dashboards} alt={project} className="w-full" />
          </div>
        ) : project === "AI" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={aiSm}
              alt={project}
              className="w-[40%] absolute bottom-0 right-0"
            />
            <img src={ai} alt={project} className="w-full" />
          </div>
        ) : project === "Forms" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={formsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={forms} alt={project} className="w-full" />
          </div>
        ) : project === "Sprints" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={sprintsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={sprints} alt={project} className="w-full" />
          </div>
        ) : project === "Docs" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={docsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={docs} alt={project} className="w-full" />
          </div>
        ) : project === "Time-tracking" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={timetrackingSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={timetracking} alt={project} className="w-full" />
          </div>
        ) : project === "Chat" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={chatSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={chat} alt={project} className="w-full" />
          </div>
        ) : project === "Whiteboards" ? (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={whiteboardSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={whiteboard} alt={project} className="w-full" />
          </div>
        ) : (
          <div className="w-[95%] flex justify-center items-center relative">
            <img
              src={projectsSm}
              alt={project}
              className="w-[50%] absolute bottom-[-10%] right-0"
            />
            <img src={projects} alt={project} className="w-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectWeCan;

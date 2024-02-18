import { useState } from "react";

import collaborate from "../../assets/collaborate.png";
import collaborateCallout from "../../assets/collaborate-callout.png";
import enhance from "../../assets/enhance.png";
import enhanceCallout from "../../assets/enhance-callout.png";
import streamline from "../../assets/streamline.png";
import streamlineCallout from "../../assets/streamline-callout.png";

const SaveTime = () => {
  const [save, setSave] = useState("Collaborate");

  const Collaborate = ["Comments", "Docs", "Whiteboards", "Clips"];

  const Enhance = ["Views", "Dashboards", "Reports", "Goals"];

  const Streamline = [
    "Automations",
    "Forms",
    "Task Templates",
    "Custom Fields",
  ];

  const timesMobile = [
    {
      heading: "Improve collaboration",
      bold: "Get your teams working together more closely, even if they’re far apart.",
      normal:
        "Centralize project-related communications in one place, brainstorm      ideas with Whiteboards, and draft plans together with collaborative Docs.",
      butts: ["Comments", "Docs", "Whiteboards", "Clips"],
      style: "savetime-box1",
    },
    {
      heading: "Enhance visibility",
      bold: "Ditch the needless meetings and repetitive updates.",
      normal:
        "With a single source of truth for all ongoing projects across your entire org, you get a crystal-clear view of what's happening (or not), and who's responsible.",
      butts: ["Views", "Dashboards", "Reports", "Goals"],
      style: "savetime-box2",
    },
    {
      heading: "Automate work",
      bold: "Streamline business processes without breaking a sweat.",
      normal:
        "Whether it's onboarding employees, handling IT requests, or managing expense reimbursements, you can automate it all with powerful no-code Automations.",
      butts: ["Automations", "Forms", "Task Templates", "Custom Fields"],
      style: "savetime-box3",
    },
  ];
  return (
    <div>
      <div className="mt-[6rem] flex justify-center items-center flex-col text-center">
        <h1 className="lg:text-6xl text-4xl lg:w-[40%] w-[90%] font-extrabold testing-gradient">
          Save time and get more done
        </h1>
        <p className="text-xl lg:w-[33%] w-[80%] font-semibold mt-6">
          Supercharge productivity. Streamline work by doing it, and seeing it,
          in one place.
        </p>
      </div>

      {/* desktop mode */}
      <div className="lg:flex justify-center items-center w-full mt-[4rem] hidden">
        <div className="flex justify-between items-center lg:flex-row flex-col w-[95%] save-time">
          <div className="lg:w-[40%] w-full">
            <h1
              className={`text-4xl font-extrabold mb-4 ${
                save === "Collaborate" ? "active" : "nonactive"
              }`}
              onClick={() => setSave("Collaborate")}
            >
              Improve collaboration
            </h1>
            <h1
              className={`text-4xl font-extrabold mb-4 ${
                save === "Enhance" ? "active" : "nonactive"
              } ${
                save === "Enhance" || save === "Streamline" ? "block" : "hidden"
              }`}
              onClick={() => setSave("Enhance")}
            >
              Enhance visibility
            </h1>
            <h1
              className={`text-4xl font-extrabold mb-4 ${
                save === "Streamline" ? "active" : "nonactive"
              } ${save === "Streamline" ? "block" : "hidden"}`}
              onClick={() => setSave("Streamline")}
            >
              Automate work
            </h1>
            <p className="text-lg">
              <span className="font-bold">
                {save === "Collaborate"
                  ? "Get your teams working together more closely, even if they’re far apart."
                  : save === "Enhance"
                  ? "Ditch the needless meetings and repetitive updates."
                  : "Streamline business processes without breaking a sweat."}
              </span>
              <span className="">
                {save === "Collaborate"
                  ? " Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs."
                  : save === " Enhance"
                  ? "With a single source of truth for all ongoing projects across your entire org, you get a crystal-clear view of what's happening (or not), and who's responsible."
                  : " Whether it's onboarding employees, handling IT requests, or managing expense reimbursements, you can automate it all with powerful no-code Automations."}
              </span>
            </p>
            <div className="grid auto-cols-max grid-flow-col items-center mt-4 w-full">
              {(save === "Collaborate"
                ? Collaborate
                : save === "Enhance"
                ? Enhance
                : Streamline
              )?.map((item, i) => (
                <div
                  className="bg-[#ffffff] mr-3 px-3 py-1 border border-[#ceceea] rounded-lg"
                  key={i}
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h1
                className={`text-4xl font-extrabold mb-10 ${
                  save === "Enhance" ? "active" : "nonactive"
                } ${
                  save === "Enhance" || save === "Streamline"
                    ? "hidden"
                    : "block"
                }`}
                onClick={() => setSave("Enhance")}
              >
                Enhance visibility
              </h1>
              <h1
                className={`text-4xl font-extrabold mb-4 ${
                  save === "Streamline" ? "active" : "nonactive"
                } ${save === "Streamline" ? "hidden" : "block"}`}
                onClick={() => setSave("Streamline")}
              >
                Automate work
              </h1>
            </div>
          </div>
          <div className="lg:w-[40%] w-full relative">
            <img
              src={
                save === "Collaborate"
                  ? collaborateCallout
                  : save === "Enhance"
                  ? enhanceCallout
                  : streamlineCallout
              }
              alt={
                save === "Collaborate"
                  ? "collaborate callout"
                  : save === "Enhance"
                  ? "enhance callout"
                  : "streamline callout"
              }
              className="w-[50%] absolute top-[15%] left-[-30%]"
            />
            <img
              src={
                save === "Collaborate"
                  ? collaborate
                  : save === "Enhance"
                  ? enhance
                  : streamline
              }
              alt={
                save === "Collaborate"
                  ? "collaborate"
                  : save === "Enhance"
                  ? "enhance"
                  : "streamline"
              }
              className="w-full"
            />
          </div>
        </div>
      </div>
      {/* desktop mode */}

      {/* mobile mode */}
      <main className="lg:hidden flex items-center overflow-x-scroll w-full mt-8">
        {/* box */}
        {timesMobile?.map((item, i) => (
          <div
            className="flex justify-center items-center first:ml-[1rem]"
            key={i}
          >
            <div
              className={`${item?.style} h-[520px] rounded-lg w-[340px] px-[2rem] py-[2.5rem] mr-[2rem] flex justify-start items-start flex-col`}
            >
              <h1 className="text-[#ffffff] font-bold text-2xl mb-6">
                {item?.heading}
              </h1>
              <p className="text-[#ffffff]">
                <b>{item?.bold}</b> {item?.normal}
              </p>
              <div className="flex justify-start items-center mt-6 flex-wrap">
                {item?.butts?.map((but, i) => (
                  <button
                    key={i}
                    className="mr-6 bg-[#ffffff] rounded-lg px-3 py-2 mb-4 border border-[rgba(0,0,0,0.5)]"
                  >
                    {but}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* box */}
      </main>
      {/* mobile mode */}
    </div>
  );
};

export default SaveTime;

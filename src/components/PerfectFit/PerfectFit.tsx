import { useState } from "react";
import {
  Agencies,
  Engineerings,
  Marketings,
  Pmos,
  Products,
} from "../../utils/Icons";

import tick from "../../assets/tick.svg";
import free from "../../assets/free.svg";

import Pmo from "./Fits/Pmo";
import Marketing from "./Fits/Marketing";
import Product from "./Fits/Product";
import Engineering from "./Fits/Engineering";
import Agency from "./Fits/Agency";

const PerfectFit = () => {
  const [fits, setFits] = useState("PMO");

  const team = [
    {
      icon: Pmos,
      name: "PMO",
    },
    {
      icon: Marketings,
      name: "Marketing",
    },
    {
      icon: Products,
      name: "Product",
    },
    {
      icon: Engineerings,
      name: "Engineering",
    },
    {
      icon: Agencies,
      name: "Agencies",
    },
  ];

  const fitMobile = [
    {
      icon: Pmos,
      heading: "PMO",
      desc: "Deliver projects on time, every time",
      fits: [
        "Reduce delivery time with custom templates",
        "Track effort to impact with OKR planning",
        "Manage complex projects at scale",
      ],
    },
    {
      icon: Marketings,
      heading: "Marketings",
      desc: "The complete marketing solution",
      fits: [
        "Build visual plans that keep teams on track",
        "Fast track delivery with templates and calendars",
        "Leverage AI to accelerate content creation",
      ],
    },
    {
      icon: Products,
      heading: "Products",
      desc: "Plan, build, &amp; ship, all in one place",
      fits: [
        "Get flexible agile workflows for fast moving teams",
        "Reduce development time with visual roadmaps",
        "Communicate product updates and priorities",
      ],
    },
    {
      icon: Engineerings,
      heading: "Engineering",
      desc: "More building, less busy work",
      fits: [
        "Get flexible agile workflows for fast moving teams",
        "Track dependencies and resources across squads",
        "Automate and integrate across your tech stack",
      ],
    },
    {
      icon: Agencies,
      heading: "Agencies",
      desc: "The complete agency solution",
      fits: [
        "Visualize projects, progress, and teamwork",
        "Speed up collaboration and feedback cycles",
        "Optimize resources and productivity",
      ],
    },
  ];

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center w-[90%] flex-col mt-[6rem]">
          <div className="flex justify-center items-center flex-col mb-20">
            <h1 className="font-extrabold lg:text-6xl text-4xl text-center testing-gradient">
              Perfect fit for every team
            </h1>
            <p className="text-center mt-6">
              <span className="font-bold text-2xl">
                Get started fast with out-of-the-box solutions.
              </span>{" "}
              <br className="lg:block hidden" />
              <span className="text-xl font-medium mt-1">
                Easily customize ClickUp as team needs grow!
              </span>
            </p>
          </div>

          {/* desktop view */}
          <div className="lg:flex justify-between items-center w-full mb-10 hidden">
            {team?.map((item: any, i) => (
              <div
                key={i}
                className="flex justify-center items-center flex-col py-8 px-6 cursor-pointer bg-white border border-[#ececfc] rounded-md w-[10rem] h-[7rem] text-[#514b81]"
                onClick={() => setFits(item.name)}
              >
                <small>
                  <item.icon />{" "}
                </small>
                <p
                  className={`mt-2 ${
                    fits === item.name ? "font-extrabold" : "font-medium"
                  }`}
                >
                  {item.name}
                </p>
              </div>
            ))}
            <div className="lg:flex justify-center items-center py-8 px-6 cursor-pointer bg-white border border-[#ececfc] rounded-md w-[10rem] h-[7rem] text-[#514b81] hidden">
              <p className="font-semibold">See all teams</p>
            </div>
          </div>

          <div className="w-full lg:block hidden">
            {fits === "PMO" ? (
              <Pmo />
            ) : fits === "Marketing" ? (
              <Marketing />
            ) : fits === "Product" ? (
              <Product />
            ) : fits === "Engineering" ? (
              <Engineering />
            ) : (
              <Agency />
            )}
          </div>
          {/* desktop view */}

          {/* mobile view */}
          <main className="lg:hidden flex items-center overflow-x-scroll w-full">
            {fitMobile?.map((item, i) => (
              <div
                className="flex justify-center items-center first:ml-[1rem]"
                key={i}
              >
                <div className=" w-[340px] h-[520px] flex justify-start items-start flex-col bg-[#ffffff] border border-[#ceceea] rounded-md py-10 px-[2rem] mr-[2rem]">
                  <div className="flex justify-center items-center mt-2">
                    <small>
                      <item.icon />
                    </small>
                    <h1 className="font-bold text-3xl ml-3">{item.heading}</h1>
                  </div>
                  <p className="font-bold text-xl mb-6 mt-3">{item.desc}</p>
                  <div className="">
                    {item.fits?.map((fit: any, i: any) => (
                      <div
                        className="flex justify-start items-center  mb-4 w-full"
                        key={i}
                      >
                        <img src={tick} alt="" />
                        <p className="ml-3 font-semibold text-lg text-[#24223e] ">
                          {fit}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="relative w-full">
                    <img
                      src={free}
                      alt="free tag"
                      className="absolute right-[-8%] top-[-10%]"
                    />
                    <button className="font-bold perfectfit-btn text-center w-full text-[#ffffff] mt-10 rounded-md py-4 flex justify-center items-center">
                      Use this Solution{" "}
                      <i className="fa-solid fa-arrow-right ml-3 text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>
          {/* mobile view */}
        </div>
      </div>
    </section>
  );
};

export default PerfectFit;

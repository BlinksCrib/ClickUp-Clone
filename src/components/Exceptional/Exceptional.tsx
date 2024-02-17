import powered from "../../assets/AI-powered-productivity.png";
import board from "../../assets/view-work-your-way.png";
import search from "../../assets/search-everything.png";
import julie from "../../assets/stay-ahead.png";
import globe from "../../assets/teams-worldwide-planet.png";

import {
  CalenderArrow,
  Clock,
  Spanner,
  SwitchOff,
  SwitchOn,
} from "../../utils/Icons";

const Exceptional = () => {
  const click = [
    {
      name: "Time Tracking",
      icon: Clock,
      tem: SwitchOff,
    },
    {
      name: "Sprints",
      icon: CalenderArrow,
      tem: SwitchOn,
    },
    {
      name: "Custom Fields",
      icon: Spanner,
      tem: SwitchOff,
    },
  ];

  const figure = [
    {
      number: 305,
      name: "Task completed",
    },
    {
      number: 55,
      name: "Docs created",
    },
    {
      number: 615,
      name: "Messages sent",
    },
    {
      number: 11,
      name: "Automations created",
    },
  ];

  return (
    <section>
      <div className="flex w-full justify-center items-center">
        <div className="flex justify-center items-center w-[95%] flex-col mt-12">
          {/* top part */}
          <div className="text-center flex justify-center items-center flex-col">
            <h1 className="lg:text-6xl text-4xl font-extrabold lg:w-[60%] lg:leading-[4.5rem]  testing-gradient">
              Everything your team is looking for
            </h1>
            <p className="lg:text-2xl text-xl lg:w-[70%] mt-3">
              <span className="font-bold ">
                ClickUp’s exceptional flexibility can handle any type of work.
              </span>
              <span> And we never stop innovating.</span>
            </p>
          </div>
          {/* top part */}

          {/* bottom part */}
          <section className="w-[95%]">
            <div>
              {/* bottom section box */}
              <main className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center items-center w-full lg:flex-row flex-col mt-10">
                <div className="exception-box1 sm:h-[380px] h-[420px] text-[#ffffff] rounded-lg">
                  <div className="z-10 flex justify-center items-center h-[30%]">
                    <aside className="w-[90%]">
                      <h1 className="text-2xl font-bold mt-10">
                        AI-powered productivity
                      </h1>
                      <p className="mt-2">
                        Get work done faster with the only AI-powered assistant
                        tailored to your role.
                      </p>
                    </aside>
                  </div>
                  <div className="flex justify-end items-end h-[70%]">
                    <img
                      src={powered}
                      alt="ai powered productivity"
                      className="z-0 w-full lg:h-[90%] h-full"
                    />
                  </div>
                </div>
                <div className="exception-box2 sm:h-[380px] h-[420px] rounded-lg">
                  <div className="h-[30%] flex justify-center items-center text-[#ffffff]">
                    <aside className="w-[90%]">
                      <h1 className="text-2xl font-bold mt-10">View work your way</h1>
                      <p className="mt-2">
                        Instantly switch between 15 views including list, board,
                        gantt, and more.
                      </p>
                    </aside>
                  </div>
                  <div className="flex justify-end items-end h-[70%]">
                    <img
                      src={board}
                      alt="view work your way"
                      className="lg:h-[90%] h-full"
                    />
                  </div>
                </div>
                <div className="exception-box3 sm:h-[380px] h-[420px] rounded-lg">
                  <div className="flex justify-center items-center h-[30%] text-[#ffffff]">
                    <aside className="w-[90%]">
                      <h1 className="text-2xl font-bold mt-10">
                        Customize in a click
                      </h1>
                      <p className="mt-2">
                        Configuring ClickUp for different types of work is as
                        easy as flipping a switch.
                      </p>
                    </aside>
                  </div>
                  <div className="flex justify-center items-center flex-col w-full h-[70%]">
                    {click?.map((item, i) => (
                      <div
                        className="flex justify-center items-center w-full even:bg-[#ffffff] text-[#ffffff] even:text-[#4ab9fd] mb-4 py-3"
                        key={i}
                      >
                        <div className="w-[90%] flex justify-between items-center">
                          <div className="flex justify-center items-center">
                            <small className="mr-3">
                              <item.icon />
                            </small>
                            <h4 className="font-bold ">{item.name}</h4>
                          </div>
                          <div>
                            <small>
                              <item.tem />
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 exception-box4 sm:h-[380px] h-[420px] rounded-lg">
                  <aside></aside>
                  <aside></aside>
                </div>
                <div className="exception-box5 sm:h-[380px] h-[420px] rounded-lg">
                  <div className="flex justify-center items-center h-[30%] text-[#ffffff]">
                    <aside className="w-[90%]">
                      <h1 className="text-2xl font-bold mt-10">Search everything</h1>
                      <p className="mt-2">
                        Find any file in ClickUp, a connected app, or your local
                        drive, from one place.
                      </p>
                    </aside>
                  </div>
                  <div className="h-[70%] flex justify-end items-end">
                    <img
                      src={search}
                      alt="search everything"
                      className="lg:h-[90%] h-full"
                    />
                  </div>
                </div>
                <div className="exception-box6 sm:h-[380px] h-[420px] rounded-lg">
                  <div className="flex justify-center items-center h-[30%] text-[#ffffff]">
                    <aside className="w-[90%]">
                      <h1 className="text-2xl font-bold mt-10">
                        Stay ahead of what’s next
                      </h1>
                      <p className="mt-2">
                        Organize your work, reminders, and calendar events all
                        from your personalized Home.
                      </p>
                    </aside>
                  </div>
                  <div className="h-[70%] flex justify-end items-end">
                    <img
                      src={julie}
                      alt="stay ahead"
                      className="lg:h-[90%] h-full"
                    />
                  </div>
                </div>
                <div className="exception-box7 lg:col-span-2 text-[#ffffff] relative sm:h-[380px] h-[420px] rounded-lg lg:mb-0 mb-[5rem]">
                  <div className="flex justify-center items-center">
                    <aside className="w-[90%]">
                      <h1 className="sm:text-2xl text-lg font-bold mt-4 mb-8">Trusted by over 2,000,000 teams</h1>
                      <div className="grid grid-cols-2 sm:w-[60%] w-[90%]">
                        {figure?.map((item, i) => (
                          <div
                            className="flex justify-center items-start flex-col mb-6"
                            key={i}
                          >
                            <h2 className="font-bold text-2xl">{item.number}M+</h2>
                            <p className="text-[#5e6fac] text-nowrap">{item.name}</p>
                          </div>
                        ))}
                      </div>
                      <button className="py-3 sm:w-[55%] w-[80%] font-bold lg:mt-6 rounded-lg">Join today for free <i className="fa-solid fa-arrow-right ml-2"></i></button>
                    </aside>
                  </div>
                  <img
                    src={globe}
                    alt="globe"
                    className="absolute w-[60%] right-0 bottom-0"
                  />
                </div>
              </main>
              {/* bottom section box */}
            </div>
          </section>
          {/* bottom part */}
        </div>
      </div>
    </section>
  );
};

export default Exceptional;

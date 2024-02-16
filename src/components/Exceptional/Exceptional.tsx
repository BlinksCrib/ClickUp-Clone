import powered from "../../assets/AI-powered-productivity.png";
import board from "../../assets/view-work-your-way.png";

const Exceptional = () => {
  return (
    <section>
      <div className="flex w-full justify-center items-center">
        <div className="flex justify-center items-center w-[95%] flex-col mt-12">
          {/* top part */}
          <div className="text-center flex justify-center items-center flex-col">
            <h1 className="text-6xl font-extrabold lg:w-[60%] leading-[4.5rem]  testing-gradient">
              Everything your team is looking for
            </h1>
            <p className="text-2xl lg:w-[70%] mt-3">
              <span className="font-bold ">
                ClickUp’s exceptional flexibility can handle any type of work.
              </span>
              <span> And we never stop innovating.</span>
            </p>
          </div>
          {/* top part */}

          {/* bottom part */}
          <section>
            <div>
              {/* bottom section box */}
              <main className="grid grid-cols-3 gap-4 justify-center items-center w-full lg:flex-row flex-col">
                <div className="exception-box1">
                  <h1>AI-powered productivity</h1>
                  <p>
                    Get work done faster with the only AI-powered assistant
                    tailored to your role.
                  </p>
                  <img src={powered} alt="ai powered productivity" className="border z-[100]" />
                </div>
                <div className="exception-box2">
                  <h1>View work your way</h1>
                  <p>
                    Instantly switch between 15 views including list, board,
                    gantt, and more.
                  </p>
                  <img src={board} alt="view work your way" />
                </div>
                <div className="exception-box3">
                  <h1>Customize in a click</h1>
                  <p>
                    Configuring ClickUp for different types of work is as easy
                    as flipping a switch.
                  </p>
                </div>
                <div className="col-span-2 exception-box4"></div>
                <div className="exception-box5">
                  <h1>Search everything</h1>
                  <p>
                    Find any file in ClickUp, a connected app, or your local
                    drive, from one place.
                  </p>
                </div>
                <div className="exception-box6"></div>
                <div className="exception-box7 col-span-2"></div>
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

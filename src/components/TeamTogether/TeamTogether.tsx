import { useParallax } from "react-scroll-parallax";

const TeamTogether = () => {
  const parallax = useParallax<HTMLDivElement>({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [-100, 100],
  });

  return (
    <section>
      <main className="w-full flex justify-center items-center flex-col">
        <div
          className="w-full flex justify-center items-center team-together z-[2]"
          ref={parallax.ref}
        />
        <div className="flex justify-center items-center w-[90%] mt-[8rem] mb-[3rem] overflow-hidden">
          <div className="relative">
            <div className="rounded-full w-[620px] h-[620px] bg-[rgba(255,255,255,0.9)] flex justify-center items-center team-together_cont">
              <aside className="md:w-4/5 sm:w-[65%] w-[55%] h-4/5 flex justify-center items-center text-center flex-col text-wrap">
                <h1 className="testing-gradient lg:text-5xl text-3xl font-extrabold text-wrap">
                  Bring teams and work together
                </h1>
                <h4 className="lg:font-bold font-semibold w-full lg:text-xl text-lg my-6 text-wrap">
                  Eliminate app chaos. Consolidate tools and cut costs.
                </h4>
                <button
                  className=" sm:px-[8rem] px-[6rem] py-3 rounded-lg font-bold sm:text-xl text-lg text-[#ffffff]"
                  style={{
                    background:
                      "linear-gradient(263deg,#fa12e3 -35.15%,#7612fa 40.89%,#12d0fa 134.61%)",
                  }}
                >
                  Get Started
                </button>
                <button></button>
                <div className="text-[#7f76b3] mt-4 font-semibold">
                  <p>Free forever. No credit card required.</p>
                  <p>Join 2+ million teams today!</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TeamTogether;

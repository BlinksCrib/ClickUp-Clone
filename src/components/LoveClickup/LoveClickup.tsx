import { Cn, Finastra2, Pressed2 } from "../../utils/Icons";

import finastra from "../../assets/finastra.png";
import cartoonNetwrok from "../../assets/cartoon-network.png";
import pressed from "../../assets/pressed.png";

const LoveClickup = () => {
  const team = [
    {
      clientImg: finastra,
      clientLogo: Finastra2,
      desc: "“With ClickUp we've seen a 40% improvement in our total go-to-market efficiency!”",
    },
    {
      clientImg: cartoonNetwrok,
      clientLogo: Cn,
      desc: "“ClickUp is our one source of truth for all the details we need – It helps us work faster.”",
    },
    {
      clientImg: pressed,
      clientLogo: Pressed2,
      desc: "“ClickUp has helped us 3x our productivity without having to scale our team.”",
    },
  ];

  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className="w-[90%] flex justify-center items-center flex-col my-12">
          <header>
            <h1 className="testing-gradient font-extrabold text-5xl">
              All teams love ClickUp
            </h1>
            <p className="text-2xl mt-6">
              <span className="font-bold">
                Teams love how ClickUp helps them get things done efficiently.
              </span>{" "}
              <br className="lg:block hidden" />
              <span className="font-medium">
                But don’t take our word for it, hear it directly from them.
              </span>
            </p>
          </header>

          <main className="flex justify-center items-center w-full">
            {team?.map((item, i) => (
              <div
                className="relative w-[30%] flex justify-center items-center text-[#ffffff]"
                key={i}
              >
                <img
                  src={item.clientImg}
                  alt="client picture"
                  className="absolute z-[1] w-[100%]"
                />
                <div className="love_clickup absolute z-[2]">
                  <small>
                    <item.clientLogo />
                  </small>
                  <h6>{item.desc}</h6>
                  <button>
                    Read story <i className="fa-solid fa-turn-up"></i>
                  </button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default LoveClickup;

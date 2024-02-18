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
            <h1 className="testing-gradient font-extrabold lg:text-6xl text-4xl text-center">
              All teams love ClickUp
            </h1>
            <p className="lg:text-2xl text-xl mt-6 text-center">
              <span className="font-bold">
                Teams love how ClickUp helps them get things done efficiently.
              </span>{" "}
              <br className="lg:block hidden" />
              <span className="font-medium">
                But don’t take our word for it, hear it directly from them.
              </span>
            </p>
          </header>

          <main className="flex justify-start items-start w-full overflow-x-scroll overflow-y-hidden mt-10">
            {team?.map((item, i) => (
              <div
                className="flex justify-center items-center lg:first:ml-0 first:ml-[1rem] w-full"
                key={i}
              >
                <div className="relative w-[350px] h-[580px] flex justify-start items-start flex-col text-[#ffffff] mr-[2rem] rounded-lg">
                  <img
                    src={item.clientImg}
                    alt="client picture"
                    className="absolute z-[1] w-full h-full object-cover rounded-lg"
                  />
                  <div className="love_clickup absolute z-[2] h-[50%] w-full rounded-br-lg rounded-bl-lg">
                    <small>
                      <item.clientLogo />
                    </small>
                    <h6 className="font-semibold mt-6">{item.desc}</h6>
                    <div className="flex justify-end items-end ">
                      <button className="w-full bg-[rgba(255,255,255,0.1)] mt-8 py-2 rounded-lg">
                        Read story <i className="fa-solid fa-turn-up ml-2"></i>
                      </button>
                    </div>
                  </div>
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

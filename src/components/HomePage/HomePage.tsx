import { Review, Star } from "../../utils/Icons";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full ">
        <div className="flex justify-center items-center h-full flex-col lg:w-[50%] w-[95%] text-center mt-[7rem]">
          <div className="bg-black rounded-full py-1 px-3 text-white mb-3">
            <p>Discover the all-new ClickUp 3.0</p>
          </div>
          <h1 className="lg:text-7xl text-4xl font-bold testing-gradient color-[#24223e]">
            One app to replace them all
          </h1>
          <div className="py-6">
            <h4 className="md:text-3xl text-2xl font-bold">
              Get everyone working in a single platform
            </h4>
            <h6 className="md:text-3xl text-xl mt-1 font-normal">
              designed to manage any type of work.
            </h6>
          </div>
          <button className="btn home-btn text-white sm:px-16 px-10 py-4 rounded-lg font-bold md:text-2xl text-lg">
            Get Started. It's FREE <i className="fa-solid fa-arrow-right ml-3"></i>
          </button>
          <div className="flex justify-center items-center mt-6 lg:flex-row flex-col">
            <small><Star /></small>
            <p className="lg:mx-4 my-2 lg:my-0 text-[#7f76b3] font-semibold">based on 10,000+ reviews from</p>
            <small><Review /></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
